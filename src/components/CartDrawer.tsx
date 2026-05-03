"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    items, 
    removeFromCart, 
    updateQuantity, 
    subtotal,
    discountAmount,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    availableCoupons
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [showOffers, setShowOffers] = useState(false);

  const handleApplyCoupon = (code: string) => {
    const result = applyCoupon(code);
    if (result.success) {
      setCouponMessage({ text: result.message, type: "success" });
      setCouponInput("");
      setShowOffers(false);
    } else {
      setCouponMessage({ text: result.message, type: "error" });
    }
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setCouponMessage(null);
    }, 3000);
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage({ text: "Coupon removed.", type: "success" });
    setTimeout(() => setCouponMessage(null), 3000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-white/95 dark:bg-[#120d0a]/95 backdrop-blur-2xl h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col border-l border-white/20 dark:border-white/5"
          >
            <div className="p-6 flex justify-between items-center border-b border-stone-200 dark:border-white/10">
              <h2 className="font-headline-md text-xl font-bold text-amber-600 dark:text-primary">Your Table Order</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-stone-500 dark:text-stone-400 mt-20 flex flex-col items-center"
                >
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-50">room_service</span>
                  <p className="font-light">Your table order is empty.</p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-6">
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.div 
                          key={item.id} 
                          layout
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          className="flex gap-4 group"
                        >
                          {item.image && (
                            <div className="w-20 h-20 overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900 shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-title-sm text-sm font-bold text-stone-900 dark:text-white truncate">{item.name}</h3>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-stone-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shrink-0"
                              >
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                            <div className="text-amber-600 dark:text-primary font-bold mb-2">₹{item.price.toFixed(2)}</div>
                            {item.options && Object.entries(item.options).map(([key, value]) => (
                              <div key={key} className="text-xs text-stone-500 dark:text-stone-400 mb-1 truncate">
                                <span className="capitalize font-bold text-stone-700 dark:text-stone-300">{key}:</span> {value}
                              </div>
                            ))}
                            <div className="flex items-center gap-3 mt-3">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-amber-50 dark:hover:bg-primary/10 hover:border-amber-200 dark:hover:border-primary/30 text-stone-600 dark:text-stone-300 transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">remove</span>
                              </button>
                              <span className="font-title-sm text-sm w-4 text-center text-stone-900 dark:text-white font-bold">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-amber-50 dark:hover:bg-primary/10 hover:border-amber-200 dark:hover:border-primary/30 text-stone-600 dark:text-stone-300 transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">add</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Coupon Section */}
                  <div className="pt-6 mt-6 border-t border-stone-200 dark:border-white/10">
                    {appliedCoupon ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex justify-between items-center"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold text-sm mb-1">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                            {appliedCoupon.code} Applied!
                          </div>
                          <p className="text-xs text-green-600 dark:text-green-500">{appliedCoupon.description}</p>
                        </div>
                        <button 
                          onClick={handleRemoveCoupon}
                          className="text-stone-400 hover:text-red-500 transition-colors p-2"
                        >
                          <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                      </motion.div>
                    ) : (
                      <div>
                        <div className="flex gap-2 mb-3">
                          <input 
                            type="text" 
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                            placeholder="Promo Code" 
                            className="flex-1 bg-stone-50 dark:bg-black/20 border border-stone-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary transition-all uppercase"
                          />
                          <button 
                            onClick={() => handleApplyCoupon(couponInput)}
                            disabled={!couponInput.trim()}
                            className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-5 rounded-xl font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-600 dark:hover:bg-primary transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                        
                        <AnimatePresence>
                          {couponMessage && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`text-xs mt-2 ${couponMessage.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}
                            >
                              {couponMessage.text}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        <button 
                          onClick={() => setShowOffers(!showOffers)}
                          className="text-xs font-bold text-amber-600 dark:text-primary flex items-center gap-1 mt-3 hover:underline"
                        >
                          <span className="material-symbols-outlined text-[16px]">local_offer</span>
                          {showOffers ? "Hide Offers" : "View Available Offers"}
                        </button>

                        <AnimatePresence>
                          {showOffers && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-2 overflow-hidden"
                            >
                              {availableCoupons.map(coupon => (
                                <div key={coupon.code} className="border border-stone-200 dark:border-white/5 rounded-lg p-3 flex justify-between items-center bg-stone-50/50 dark:bg-black/10">
                                  <div>
                                    <p className="font-bold text-sm text-stone-800 dark:text-stone-200">{coupon.code}</p>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">{coupon.description}</p>
                                  </div>
                                  <button 
                                    onClick={() => handleApplyCoupon(coupon.code)}
                                    className="text-xs font-bold bg-amber-100 dark:bg-primary/20 text-amber-700 dark:text-primary px-3 py-1.5 rounded-full hover:bg-amber-200 dark:hover:bg-primary/30 transition-colors"
                                  >
                                    Apply
                                  </button>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="p-6 border-t border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-black/20"
              >
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-stone-500 dark:text-stone-400">Subtotal</span>
                    <span className="text-stone-800 dark:text-stone-200 font-bold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <AnimatePresence>
                    {discountAmount > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex justify-between items-center text-sm text-green-600 dark:text-green-400 font-bold overflow-hidden"
                      >
                        <span>Discount ({appliedCoupon?.code})</span>
                        <span>-₹{discountAmount.toFixed(2)}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center pt-3 border-t border-stone-200 dark:border-white/10">
                    <span className="font-title-sm text-stone-800 dark:text-white uppercase tracking-widest text-xs font-bold">Final Total</span>
                    <span className="font-title-sm text-amber-600 dark:text-primary text-2xl font-bold">₹{finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-stone-900 dark:bg-primary text-white dark:text-stone-900 py-4 rounded-xl font-bold tracking-wide hover:bg-amber-600 dark:hover:brightness-110 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(245,176,65,0.2)]"
                >
                  Confirm Order
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
