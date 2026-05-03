"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && isMounted) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMounted]);

  const addMessage = (type: "user" | "assistant", content: string) => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    addMessage("user", userMessage);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      console.log("📡 API Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error response:", errorData);
        throw new Error(errorData.reply || "Failed to get response from AI");
      }

      const data = await response.json();
      console.log("✅ API Response data:", data);

      if (data.reply) {
        addMessage("assistant", data.reply);
      } else {
        addMessage(
          "assistant",
          "Sorry, I didn't get a valid response. Please try again."
        );
      }
    } catch (error) {
      console.error("❌ Chat error:", error);
      const errorMessage = error instanceof Error ? error.message : "I'm having trouble connecting";
      addMessage(
        "assistant",
        `Sorry, ${errorMessage}. Please try again or check your internet connection.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 dark:from-primary dark:to-primary-light shadow-lg hover:shadow-xl dark:shadow-primary/30 text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 90, scale: 1 }}
              exit={{ rotate: 0, scale: 0 }}
              className="material-symbols-outlined"
            >
              close
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 0, scale: 0 }}
              className="material-symbols-outlined"
            >
              chat
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-32px)] h-[500px] bg-white dark:bg-surface rounded-3xl shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-amber-100/50 dark:border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-primary dark:to-primary-light px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Waffcha AI Assistant</h3>
                  <p className="text-sm text-white/80 font-light">
                    Ask me about our menu, offers, or anything else!
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-stone-50 to-white dark:from-surface-dim dark:to-surface">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                    className="material-symbols-outlined text-amber-500 dark:text-primary text-4xl mb-3"
                  >
                    chocolate
                  </motion.span>
                  <p className="text-stone-600 dark:text-on-surface-variant font-medium mb-2">
                    Welcome to Waffcha! 🧇
                  </p>
                  <p className="text-xs text-stone-500 dark:text-on-surface-variant">
                    Ask about our waffles, ice cream, and special offers
                  </p>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2.5 rounded-2xl ${
                      message.type === "user"
                        ? "bg-amber-500 dark:bg-primary text-white rounded-br-none"
                        : "bg-stone-200 dark:bg-white/10 text-stone-900 dark:text-white rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-xs px-4 py-3 rounded-2xl rounded-bl-none bg-stone-200 dark:bg-white/10">
                    <div className="flex gap-2 items-center">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="w-2 h-2 rounded-full bg-stone-500 dark:bg-white/50"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                        className="w-2 h-2 rounded-full bg-stone-500 dark:bg-white/50"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                        className="w-2 h-2 rounded-full bg-stone-500 dark:bg-white/50"
                      />
                      <span className="text-xs text-stone-600 dark:text-white/70 ml-1">
                        Waffcha is typing...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-stone-200 dark:border-white/10 p-4 bg-white dark:bg-surface">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about menu, offers..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-full border border-stone-200 dark:border-white/20 dark:bg-white/5 dark:text-white placeholder-stone-400 dark:placeholder-on-surface-variant focus:outline-none focus:border-amber-500 dark:focus:border-primary transition-all disabled:opacity-50"
                  maxLength={1000}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-full bg-amber-500 dark:bg-primary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg"
                  aria-label="Send message"
                >
                  <span className="material-symbols-outlined text-xl">
                    send
                  </span>
                </motion.button>
              </form>
              <p className="text-xs text-stone-400 dark:text-on-surface-variant mt-2 text-center">
                Press Enter or click send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
