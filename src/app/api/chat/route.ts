import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are Waffcha AI, a friendly and knowledgeable premium dessert cafe assistant.

PERSONALITY:
- Warm, approachable, and slightly playful tone
- Professional yet conversational
- Premium and sophisticated in your language
- Always helpful and encouraging

YOUR ROLE:
You help customers with:
1. Menu exploration and recommendations
2. Order information and customization
3. Cafe locations and hours
4. Special offers and promotions
5. General questions about Waffcha

MENU CATEGORIES:
- Waffles: Classic Liege, Chocolate Chip, Lotus Biscoff, Strawberry Shortcake
- Softy Ice Cream: Vanilla, Chocolate, Mango, Matcha, Salted Caramel
- Shakes: Chocolate, Strawberry, Oreo, Coffee, Matcha
- Sundaes: Classic, Premium, Seasonal specials
- Coffee & Brews: Espresso, Cappuccino, Latte, Cold Brew, Macchiato

LOCATION:
- Primary store: Jamshedpur Flagship Store
- Hours: 10 AM - 10 PM daily
- Payment: Cash, Card, Digital wallets

OFFERS:
- Loyalty rewards program available
- Seasonal specials
- Bundle deals
- Student discounts available

INSTRUCTIONS:
- Keep responses concise (2-3 sentences max unless asked for details)
- Recommend specific menu items when appropriate
- Use emojis sparingly and tastefully (🧇, 🍦, ☕)
- Always be encouraging about trying new items
- If you don't know something specific, offer to help connect them with staff
- Never make up pricing or details - redirect to menu or staff
- Be enthusiastic about Waffcha's premium quality`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // Validate input
    if (!message || typeof message !== "string") {
      console.error("Invalid message format:", message);
      return Response.json(
        { reply: "Sorry, I didn't understand that. Please try again." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      return Response.json(
        { reply: "Please enter a message." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 1000) {
      return Response.json(
        { reply: "Your message is too long. Please keep it under 1000 characters." },
        { status: 400 }
      );
    }

    console.log("📨 User message:", trimmedMessage);

    // Call OpenAI API
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: trimmedMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
      top_p: 0.9,
    });

    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      console.error("No response content from OpenAI");
      return Response.json(
        { reply: "Sorry, I couldn't generate a response. Please try again." },
        { status: 500 }
      );
    }

    console.log("✅ AI response:", aiResponse);

    return Response.json(
      { reply: aiResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Chat endpoint error:", error);

    if (error instanceof Error) {
      return Response.json(
        { reply: `Error: ${error.message}` },
        { status: 500 }
      );
    }

    return Response.json(
      { reply: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
