"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleIcon } from "@/components/googleIcons";
import { signinWithGoogle, signUpAction } from "@/lib/supabase/action";

const MotionButton = motion.create(Button);

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Hook handles the state and the loading (isPending) automatically
  const [state, formAction, isPending] = useActionState(signUpAction, {
    error: "",
    success: "",
  });

  // Password Integrity Logic
  const hasEightChars = password.length >= 8;
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const strengthScore = [hasEightChars, hasSymbol, password.length > 10].filter(
    Boolean,
  ).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black from-0% via-[#171610] via-0% to-[#1f1d15] to-100%" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-120 px-4"
      >
        <Card className="w-110 bg-[#27251b] border border-stone-700 rounded-2xl shadow-2xl shadow-black">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-white text-3xl font-bold">
                Build Your Profile
              </h1>
              <p className="text-stone-400 text-sm">
                Enter your information to personalize your luxury experience.
              </p>
            </div>

            {/* Feedback Messages */}
            <AnimatePresence mode="wait">
              {state.error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 flex items-center gap-3 text-red-500 text-xs"
                >
                  <AlertCircle size={16} />
                  <span>{state.error}</span>
                </motion.div>
              )}
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/50 flex items-center gap-3 text-emerald-500 text-xs"
                >
                  <CheckCircle2 size={16} />
                  <span>{state.success}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form action={formAction} className="space-y-4">
              <Input
                type="text"
                name="fullName"
                required
                placeholder="Full Name"
                className="h-12 bg-neutral-900 border-stone-800 text-white placeholder:text-stone-400 focus-visible:ring-amber-300"
              />
              <Input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="h-12 bg-neutral-900 border-stone-800 text-white placeholder:text-stone-400 focus-visible:ring-amber-300"
              />

              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  required
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-neutral-900 border-stone-800 text-white placeholder:text-stone-400 focus-visible:ring-amber-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-stone-500 hover:text-yellow-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Integrity Bars */}
              <div className="space-y-3 mt-4 mb-2">
                <div className="flex gap-2 h-1.5">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`flex-1 rounded-full transition-all duration-500 ${
                        strengthScore >= level
                          ? "bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.5)]"
                          : "bg-stone-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center text-[10px] font-semibold tracking-tighter uppercase">
                  <span
                    className={
                      strengthScore >= 2 ? "text-yellow-300" : "text-stone-500"
                    }
                  >
                    {strengthScore === 3
                      ? "Strong Password"
                      : strengthScore === 2
                        ? "Medium"
                        : "Weak"}
                  </span>
                  <div className="flex gap-4 text-stone-500">
                    <span className={hasEightChars ? "text-yellow-300" : ""}>
                      8+ chars
                    </span>
                    <span className={hasSymbol ? "text-yellow-300" : ""}>
                      1 symbol
                    </span>
                  </div>
                </div>
              </div>

              <MotionButton
                whileHover={{ scale: 1.01 }}
                type="submit"
                disabled={isPending}
                className="w-full h-12 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isPending ? "Creating Account..." : "Sign up"}
              </MotionButton>
            </form>

            <div className="text-center text-xs text-stone-400">
              OR CONTINUE WITH
            </div>

            <form action={signinWithGoogle}>
              <MotionButton
                type="submit"
                variant="outline"
                whileHover={{ scale: 1.01 }}
                className="w-full h-12 bg-transparent border-yellow-400/40 text-white hover:bg-yellow-400/10"
              >
                <GoogleIcon />
                Continue with Google
              </MotionButton>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
