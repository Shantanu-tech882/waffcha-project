"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence, Variants } from "framer-motion";

const WaffleBases = [
  { id: "base_liege", name: "Classic Liege", price: 150.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBtupUnANxhp1ZU1CbIDU5NLU8uQ5cYmjYwggx_iaPndd_9IZxpKmDanOwhsnxHRKsjIVCRkbGl7jpUblFQZWS_n0iuakKeWoFZ9q_0N49SZZm88RY4dxGODbrpSWsI7e1u2m4HSWvdEaFPeBe_jsC_YGOgvA9Bc-kMwVGvrFpVTWDqf2--FBTkvFcDB7XZjY18zmBmuWhOcNdSBWz3nDnkf3nDe7QcxsFC04YGmGfKnxFMJMJ8Eduagu4pybKIiU3lU4dPt-eMXE" },
  { id: "base_brussels", name: "Crispy Brussels", price: 175.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABlG5gPZu8vab4YDgwWup3wjMcraKvyOd3s0FOS0n5m6oB4Ur5RyCTlUfKAawq1WSbJnHEp_WDmjrQpAHzzzmMTb-rAD0JMxnjKN0iW4eFoyasH5iR8ROz9dn1Thh-h4UarmKQkCjSGecx6bAtjiSVU5XRhiHmvh68vlkonkNVIjFnSwkBlpMDeHGcx6lETSNq0RFD6QbGP9L3GWNWB74ik6zg4DjPFCli9bp9UdCpDZmvrIZlR65ItYMbCunrvCPlwwqtWTBxrdk" },
  { id: "base_cocoa", name: "Midnight Cocoa", price: 200.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL62da14Znu_aiRWYIGgnrPtkny2pbvZ95m3RQ0qAetU1ojKphGhMG4jCRqRQDTULaD84H-FK0dPUQRzuk4cUbNXXo7Xk7EW-XUaK3KbDBbIm6ojD9I1WVa6UqbpZEuk-71kkr3IWQBu2EEIs16RaZ94fNljNWCwW1bFcBlDBdeAIu8iSWluzbNyKi0vEyHJNDauwGIs4a0jI0zPZUjZcGHe5BTk1bLy92-DIYyxHkWS2jT9APbSI6eA6o4aWn0Sn4dQC_8JZb5Is" }
];

const Toppings = [
  { id: "top_strawberries", name: "Fresh Strawberries", price: 40.0 },
  { id: "top_bananas", name: "Caramelized Bananas", price: 40.0 },
  { id: "top_blueberries", name: "Wild Blueberries", price: 60.0 },
  { id: "top_pecans", name: "Candied Pecans", price: 80.0 },
  { id: "top_whipped_cream", name: "Vanilla Bean Whipped Cream", price: 30.0 },
  { id: "top_ice_cream", name: "Soft Serve Ice Cream", price: 100.0 },
];

const Drizzles = [
  { id: "driz_maple", name: "Pure Maple Syrup", price: 50.0 },
  { id: "driz_honey", name: "Golden Honey", price: 40.0 },
  { id: "driz_chocolate", name: "Dark Chocolate Fudge", price: 60.0 },
  { id: "driz_caramel", name: "Salted Caramel", price: 60.0 },
];

export default function BuildWaffle() {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedBase, setSelectedBase] = useState(WaffleBases[0]);
  const [selectedToppings, setSelectedToppings] = useState<typeof Toppings>([]);
  const [selectedDrizzle, setSelectedDrizzle] = useState(Drizzles[0]);

  const toggleTopping = (topping: typeof Toppings[0]) => {
    setSelectedToppings(prev => 
      prev.find(t => t.id === topping.id)
        ? prev.filter(t => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const totalPrice = selectedBase.price + 
    selectedToppings.reduce((sum, t) => sum + t.price, 0) + 
    (selectedDrizzle ? selectedDrizzle.price : 0);

  const handleAddToCart = () => {
    const options: Record<string, string> = {
      "Base": selectedBase.name,
    };
    if (selectedToppings.length > 0) {
      options["Toppings"] = selectedToppings.map(t => t.name).join(", ");
    }
    if (selectedDrizzle) {
      options["Drizzle"] = selectedDrizzle.name;
    }

    addToCart({
      id: `custom_${Date.now()}`,
      name: "Custom Masterpiece Waffle",
      price: totalPrice,
      quantity: 1,
      image: selectedBase.image,
      options
    });
    setIsCartOpen(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-24 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="font-label-caps text-xs text-amber-500 dark:text-primary mb-3 block tracking-[0.2em] font-bold">BE THE CHEF</span>
        <h1 className="font-display-lg text-5xl md:text-6xl text-stone-900 dark:text-white mb-6 font-bold tracking-tight">Build Your Own Waffle</h1>
        <p className="font-body-lg text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-lg font-light">
          Start with our artisanal base, and layer it with premium toppings and drizzles to create your personal masterpiece.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 space-y-16"
        >
          {/* Step 1: Base */}
          <motion.section variants={itemVariants}>
            <h2 className="font-headline-md text-2xl text-stone-900 dark:text-white border-b border-stone-200 dark:border-white/10 pb-4 mb-8 flex items-center gap-3">
              <span className="bg-amber-100 text-amber-700 dark:bg-primary/20 dark:text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Choose Your Base
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WaffleBases.map((base) => (
                <motion.div 
                  key={base.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedBase(base)}
                  className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedBase.id === base.id ? 'border-amber-500 dark:border-primary shadow-[0_10px_30px_rgba(245,158,11,0.2)] dark:shadow-[0_10px_30px_rgba(230,168,23,0.2)] ring-4 ring-amber-500/10 dark:ring-primary/10' : 'border-stone-200 dark:border-white/10 hover:border-amber-300 dark:hover:border-primary/50'}`}
                >
                  <div className="aspect-[4/3] bg-stone-100 dark:bg-stone-900 overflow-hidden relative">
                    <img src={base.image} alt={base.name} className="w-full h-full object-cover" />
                    {selectedBase.id === base.id && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="material-symbols-outlined text-amber-400 dark:text-primary drop-shadow-md text-3xl"
                        >
                          check_circle
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 bg-white dark:bg-[#120d0a]">
                    <h3 className="font-title-sm text-base font-bold text-stone-900 dark:text-white">{base.name}</h3>
                    <p className="text-amber-600 dark:text-primary font-bold mt-1">₹{base.price.toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Step 2: Toppings */}
          <motion.section variants={itemVariants}>
            <h2 className="font-headline-md text-2xl text-stone-900 dark:text-white border-b border-stone-200 dark:border-white/10 pb-4 mb-8 flex items-center gap-3">
              <span className="bg-amber-100 text-amber-700 dark:bg-primary/20 dark:text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Select Premium Toppings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Toppings.map((topping) => {
                const isSelected = selectedToppings.find(t => t.id === topping.id);
                return (
                  <motion.label 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    key={topping.id} 
                    className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'bg-amber-50 dark:bg-primary/10 border-amber-400 dark:border-primary shadow-sm' : 'bg-white dark:bg-[#120d0a] border-stone-200 dark:border-white/10 hover:border-amber-300 dark:hover:border-primary/50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-amber-500 border-amber-500 dark:bg-primary dark:border-primary' : 'border-stone-300 dark:border-stone-600'}`}>
                        {isSelected && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                      </div>
                      <input 
                        type="checkbox" 
                        checked={!!isSelected}
                        onChange={() => toggleTopping(topping)}
                        className="hidden"
                      />
                      <span className="font-title-sm text-stone-800 dark:text-stone-200">{topping.name}</span>
                    </div>
                    <span className="text-amber-600 dark:text-primary font-bold">+₹{topping.price.toFixed(2)}</span>
                  </motion.label>
                );
              })}
            </div>
          </motion.section>

          {/* Step 3: Drizzles */}
          <motion.section variants={itemVariants}>
            <h2 className="font-headline-md text-2xl text-stone-900 dark:text-white border-b border-stone-200 dark:border-white/10 pb-4 mb-8 flex items-center gap-3">
              <span className="bg-amber-100 text-amber-700 dark:bg-primary/20 dark:text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Add a Finishing Drizzle
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Drizzles.map((drizzle) => (
                <motion.label 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  key={drizzle.id} 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedDrizzle?.id === drizzle.id ? 'bg-amber-50 dark:bg-primary/10 border-amber-400 dark:border-primary shadow-sm' : 'bg-white dark:bg-[#120d0a] border-stone-200 dark:border-white/10 hover:border-amber-300 dark:hover:border-primary/50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedDrizzle?.id === drizzle.id ? 'border-amber-500 dark:border-primary' : 'border-stone-300 dark:border-stone-600'}`}>
                      {selectedDrizzle?.id === drizzle.id && <div className="w-3 h-3 rounded-full bg-amber-500 dark:bg-primary"></div>}
                    </div>
                    <input 
                      type="radio" 
                      name="drizzle"
                      checked={selectedDrizzle?.id === drizzle.id}
                      onChange={() => setSelectedDrizzle(drizzle)}
                      className="hidden"
                    />
                    <span className="font-title-sm text-stone-800 dark:text-stone-200">{drizzle.name}</span>
                  </div>
                  <span className="text-amber-600 dark:text-primary font-bold">+₹{drizzle.price.toFixed(2)}</span>
                </motion.label>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Order Summary Sticky Sidebar */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sticky top-32 bg-white dark:bg-[#120d0a]/80 dark:backdrop-blur-xl rounded-3xl p-8 border border-stone-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <h2 className="font-headline-md text-2xl font-bold text-amber-600 dark:text-primary mb-8 tracking-tight">Your Creation</h2>
            
            <div className="space-y-5 mb-10">
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-stone-800 dark:text-white">{selectedBase.name}</span>
                <span className="font-bold text-stone-600 dark:text-stone-300">₹{selectedBase.price.toFixed(2)}</span>
              </div>
              
              <AnimatePresence>
                {selectedToppings.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-stone-200 dark:border-white/10 pt-5 space-y-3 overflow-hidden"
                  >
                    <p className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-3">Toppings</p>
                    {selectedToppings.map(t => (
                      <motion.div 
                        key={t.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex justify-between items-center text-sm text-stone-600 dark:text-stone-300"
                      >
                        <span>{t.name}</span>
                        <span>+₹{t.price.toFixed(2)}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {selectedDrizzle && (
                  <motion.div 
                    key={selectedDrizzle.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-stone-200 dark:border-white/10 pt-5 space-y-3"
                  >
                    <p className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-3">Drizzle</p>
                    <div className="flex justify-between items-center text-sm text-stone-600 dark:text-stone-300">
                      <span>{selectedDrizzle.name}</span>
                      <span>+₹{selectedDrizzle.price.toFixed(2)}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t-2 border-stone-100 dark:border-white/5 pt-8 mb-10 flex justify-between items-end">
              <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest text-sm">Total</span>
              <motion.span 
                key={totalPrice}
                initial={{ scale: 1.2, color: "#f59e0b" }}
                animate={{ scale: 1, color: "var(--color-primary)" }}
                className="font-display-lg text-4xl font-bold text-amber-600 dark:text-primary"
              >
                ₹{totalPrice.toFixed(2)}
              </motion.span>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-amber-500 dark:bg-primary text-stone-900 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-amber-400 dark:hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(245,158,11,0.2)] dark:shadow-[0_10px_30px_rgba(230,168,23,0.3)] flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
              Add to Table Order
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
