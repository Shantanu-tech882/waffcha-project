"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const { user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleGoogleSignIn = async () => {
    setLocalLoading(true);
    setError("");
    try {
      await signInWithGoogle();
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
      console.error(err);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalLoading(true);
    setError("");

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please try again.");
      console.error(err);
    } finally {
      setLocalLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-12 h-12 rounded-full border-4 border-t-amber-500 border-amber-200"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-50 dark:from-surface dark:via-surface-dim dark:to-surface flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white dark:bg-surface-container rounded-3xl shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-8 sm:p-10 border border-amber-100/50 dark:border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter text-amber-600 dark:text-primary mb-2 font-headline-md"
            >
              Waffcha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-stone-600 dark:text-on-surface-variant text-sm font-body-md"
            >
              {isSignUp ? "Join our waffle kingdom" : "Welcome back"}
            </motion.p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-xs font-body-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Google Sign-In Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={handleGoogleSignIn}
            disabled={localLoading}
            className="w-full py-3 px-4 rounded-xl border-2 border-stone-200 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-stone-50 dark:hover:bg-white/10 text-stone-700 dark:text-on-surface font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
          >
            {localLoading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-4 h-4 rounded-full border-2 border-t-amber-500 border-transparent"
                />
                Signing in...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </motion.button>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-4 my-6"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-white/20" />
            <span className="text-xs text-stone-500 dark:text-on-surface-variant font-body-sm">
              Or continue with email
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-white/20" />
          </motion.div>

          {/* Email Form */}
          <motion.form
            onSubmit={handleEmailSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-on-surface mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={localLoading}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-stone-200 dark:border-white/20 bg-stone-50 dark:bg-white/5 text-stone-900 dark:text-on-surface placeholder-stone-400 dark:placeholder-on-surface-variant focus:outline-none focus:border-amber-500 dark:focus:border-primary transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-on-surface mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={localLoading}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-stone-200 dark:border-white/20 bg-stone-50 dark:bg-white/5 text-stone-900 dark:text-on-surface placeholder-stone-400 dark:placeholder-on-surface-variant focus:outline-none focus:border-amber-500 dark:focus:border-primary transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <motion.button
              type="submit"
              disabled={localLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 dark:from-primary dark:to-primary-light hover:shadow-lg dark:hover:shadow-primary/30 text-white font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {localLoading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
            </motion.button>
          </motion.form>

          {/* Toggle Sign Up / Sign In */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-center text-stone-600 dark:text-on-surface-variant text-sm mt-6"
          >
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setEmail("");
                setPassword("");
              }}
              className="text-amber-600 dark:text-primary font-bold hover:underline transition-colors"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </motion.p>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8 pt-6 border-t border-stone-200 dark:border-white/10"
          >
            <Link
              href="/"
              className="text-sm text-stone-500 dark:text-on-surface-variant hover:text-stone-700 dark:hover:text-on-surface transition-colors"
            >
              ← Back to Menu
            </Link>
          </motion.div>
        </div>

        {/* Footer Branding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-center mt-8 text-xs text-stone-500 dark:text-on-surface-variant font-body-sm"
        >
          Indulgence, Redefined.
        </motion.p>
      </motion.div>
    </div>
  );
}
