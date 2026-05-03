"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-stone-50 dark:bg-[#080504] border-t border-stone-200 dark:border-white/5 mt-auto transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-0 dark:opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 dark:via-primary/20 to-transparent"></div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 px-6 sm:px-12 py-12 sm:py-20 max-w-7xl mx-auto font-['Plus_Jakarta_Sans'] text-sm leading-relaxed"
      >
        <motion.div variants={item} className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="text-xl font-bold text-amber-600 dark:text-primary mb-6 tracking-tight">Waffcha</div>
          <p className="text-stone-500 dark:text-stone-400 mb-6 max-w-sm font-light">
            Crafting moments of pure indulgence through artisanal waffles and premium soft serves since 2024.
          </p>
          <div className="flex gap-4">
            <a aria-label="Social 1" className="text-stone-400 dark:text-stone-500 hover:text-amber-500 dark:hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5" href="#">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a aria-label="Social 2" className="text-stone-400 dark:text-stone-500 hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5" href="#">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <h4 className="text-stone-900 dark:text-white font-bold mb-6 tracking-wide">Menu</h4>
          <ul className="space-y-4">
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/">Classic Liege</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/">Signature Softy</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/">Coffee & Brews</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/">Seasonal Specials</Link></li>
          </ul>
        </motion.div>
        
        <motion.div variants={item}>
          <h4 className="text-stone-900 dark:text-white font-bold mb-6 tracking-wide">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/about">Our Story</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/about">Sustainability</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="/locations">Locations</Link></li>
            <li><Link className="text-stone-500 dark:text-stone-400 hover:text-amber-500 dark:hover:text-primary transition-all block py-1 font-light" href="#">Careers</Link></li>
          </ul>
        </motion.div>
        
        <motion.div variants={item} className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 className="text-stone-900 dark:text-white font-bold mb-6 tracking-wide">Indulge Daily</h4>
          <p className="text-stone-500 dark:text-stone-400 mb-4 max-w-sm font-light">Subscribe for exclusive offers and secret menu access.</p>
          <div className="flex border border-stone-200 dark:border-white/10 rounded-full overflow-hidden bg-white dark:bg-white/5 max-w-sm focus-within:ring-2 focus-within:ring-amber-500/50 dark:focus-within:ring-primary/50 transition-all">
            <input aria-label="Email subscription" className="border-none focus:ring-0 px-5 py-3 sm:py-2 w-full text-sm outline-none bg-transparent dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600" placeholder="Your email" type="email"/>
            <button aria-label="Subscribe" className="bg-amber-600 dark:bg-primary text-white dark:text-stone-900 px-6 py-3 sm:py-2 hover:bg-amber-700 dark:hover:brightness-110 transition-colors font-bold">
              <span className="material-symbols-outlined text-sm sm:text-base mt-1">arrow_forward</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="border-t border-stone-200 dark:border-white/5 py-8 px-6 sm:px-12 text-center text-stone-400 dark:text-stone-600 text-xs tracking-wider">
        © 2024 Waffcha Boutique. Crafted for Effortless Indulgence.
      </div>
    </footer>
  );
}
