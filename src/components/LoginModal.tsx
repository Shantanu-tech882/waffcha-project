"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function LoginModal() {
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const [showEmail, setShowEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithGoogle();
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmail(email, password);
    } catch (err: any) {
      setError(err.message || "Email sign-in failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md bg-white/95 dark:bg-surface rounded-2xl shadow-2xl border border-amber-100 dark:border-amber-600/30 p-8 mx-4"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-amber-600 dark:text-primary mb-1">Welcome to Waffcha</h1>
          <p className="text-stone-600 dark:text-on-surface-variant text-sm">Sign in to continue exploring gourmet waffles</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <motion.button
          onClick={handleGoogle}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:shadow-md hover:bg-stone-50 dark:hover:bg-stone-700 transition mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34-4.3-50.2H272v95.1h146.9c-6.4 34-25 62.8-53.4 82v68.3h86.3c50.5-46.6 80.7-115 80.7-195.2z" />
            <path fill="#34A853" d="M272 544.3c72.6 0 133.7-24.1 178.3-65.4l-86.3-68.3c-24.1 16.2-54.9 25.8-92 25.8-70.6 0-130.5-47.5-152-111.4H33.2v69.8C77.8 482.7 167.5 544.3 272 544.3z" />
            <path fill="#FBBC05" d="M120 330.9c-10.8-32-10.8-66.3 0-98.3V162.8H33.2C11.7 199.5 0 245.5 0 293c0 47.5 11.7 93.5 33.2 130.2L120 330.9z" />
            <path fill="#EA4335" d="M272 108.6c39.6 0 75.3 13.6 103.4 40.4l77.5-77.5C403.2 25.3 340.6 0 272 0 167.5 0 77.8 61.6 33.2 162.8l86.8 69.9c21.6-63.9 81.4-111.4 152-111.4z" />
          </svg>
          <span className="font-semibold text-stone-700 dark:text-white">{loading ? "Signing in..." : "Continue with Google"}</span>
        </motion.button>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-stone-200 dark:bg-stone-700 flex-1" />
          <div className="text-stone-400 dark:text-stone-500 text-sm">or</div>
          <div className="h-px bg-stone-200 dark:bg-stone-700 flex-1" />
        </div>

        <div className="text-center mb-4">
          <button
            onClick={() => setShowEmail((s) => !s)}
            className="text-amber-600 dark:text-primary text-sm font-medium hover:underline"
          >
            {showEmail ? "Hide" : "Use"} email & password
          </button>
        </div>

        {showEmail && (
          <form onSubmit={handleEmail} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-stone-200 dark:border-stone-700 dark:bg-stone-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-primary"
              required
              disabled={loading}
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-amber-600 dark:bg-primary text-white font-semibold hover:bg-amber-700 dark:hover:bg-primary-fixed transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </motion.button>
          </form>
        )}

        <p className="text-center text-sm text-stone-500 dark:text-on-surface-variant mt-6">
          New here?{" "}
          <a href="#" className="text-amber-600 dark:text-primary font-medium hover:underline">
            Create an account
          </a>
        </p>
      </motion.div>
    </div>
  );
}
