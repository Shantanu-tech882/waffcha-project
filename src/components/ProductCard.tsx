"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: string;
  reviews: string;
  isBestseller?: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  isBestseller
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image,
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg shadow-stone-200/50 dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-[0_15px_35px_rgba(230,168,23,0.15)] transition-all duration-300 border border-stone-200/50 dark:border-white/5"
    >
      <div className="aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-900">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {isBestseller && (
        <div className="absolute top-4 left-4 bg-amber-500/90 dark:bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-900 font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-amber-500/20">
          Bestseller
        </div>
      )}

      <motion.div 
        initial={{ y: 20, opacity: 0.9 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-6 glass-panel absolute bottom-0 left-0 right-0 m-4 rounded-xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-xl"
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-title-sm text-lg font-bold text-stone-900 dark:text-white leading-tight">{name}</h3>
          <span className="text-amber-600 dark:text-primary font-bold text-lg">₹{price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-1.5 mb-5">
          <span className="material-symbols-outlined text-amber-500 dark:text-primary text-sm drop-shadow-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xs font-bold text-stone-600 dark:text-stone-300">{rating} <span className="font-normal opacity-70">({reviews})</span></span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleQuickAdd}
          className="w-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 py-3.5 rounded-xl font-bold text-sm tracking-wide text-center hover:bg-amber-600 dark:hover:bg-primary transition-colors shadow-md"
        >
          Dine In
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
