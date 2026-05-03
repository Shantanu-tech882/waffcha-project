"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const NAV_LINKS = [
  { href: "/", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About Us" },
  { href: "/rewards", label: "Rewards" },
  { href: "/build-waffle", label: "Build Your Own" },
];

export default function Navigation() {
  const { setIsCartOpen, items } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, signOutUser } = useAuth();

  useEffect(() => setMounted(true), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-surface/80 backdrop-blur-xl border-b border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(62,39,35,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex justify-between items-center px-4 sm:px-8 py-4 max-w-full transition-colors duration-500">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-tighter text-amber-600 dark:text-primary font-headline-md"
        >
          Waffcha
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isBuildOwn = link.href === "/build-waffle";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Plus_Jakarta_Sans'] font-medium tracking-tight transition-colors duration-300 text-sm lg:text-base ${
                  isActive
                    ? "text-amber-600 dark:text-primary border-b-2 border-amber-500 dark:border-primary pb-1"
                    : isBuildOwn
                    ? "text-primary hover:text-amber-500 dark:hover:text-primary-fixed"
                    : "text-stone-600 dark:text-on-surface-variant hover:text-amber-500 dark:hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5 relative overflow-hidden flex items-center justify-center w-10 h-10"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme === "dark" ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined absolute"
                >
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </motion.span>
              </AnimatePresence>
            </button>
          )}

          <button
            onClick={() => setIsCartOpen(true)}
            className="text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors relative p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5"
            aria-label="Open cart"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-primary text-white dark:text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => signOutUser()}
                className="hidden sm:flex items-center gap-2 text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5"
                aria-label="Sign out"
              >
                <img src={user.photoURL ?? "/vercel.svg"} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium">Sign out</span>
              </button>

              <button
                onClick={() => signOutUser()}
                className="text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5 sm:hidden"
                aria-label="Sign out mobile"
              >
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5 hidden sm:block">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[90] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-[73px] right-0 w-full max-w-xs bg-white/95 dark:bg-surface/95 backdrop-blur-2xl shadow-2xl border-l border-white/30 dark:border-white/10 h-[calc(100vh-73px)] flex flex-col p-6 gap-2"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-['Plus_Jakarta_Sans'] font-medium tracking-tight text-lg py-3 px-4 rounded-xl transition-colors duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-stone-700 dark:text-on-surface hover:bg-stone-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-auto pt-4 border-t border-stone-200 dark:border-outline-variant/30">
                {user ? (
                  <button
                    onClick={() => { signOutUser(); setMobileOpen(false); }}
                    className="w-full flex items-center gap-3 text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-stone-100 dark:hover:bg-white/5"
                    aria-label="Sign out"
                  >
                    <span className="material-symbols-outlined">logout</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">Sign out</span>
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center gap-3 text-stone-600 dark:text-on-surface hover:text-amber-500 dark:hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-stone-100 dark:hover:bg-white/5"
                  >
                    <span className="material-symbols-outlined">account_circle</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium">My Account</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
