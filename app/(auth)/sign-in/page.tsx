"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleIcon } from "@/components/googleIcons";

const MotionButton = motion(Button);

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black from-0% via-[#171610] via-0% to-[#1f1d15] to-100%" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-1"
      >
        <Card className="w-110 bg-[#27251b] border border-stone-700 rounded-2xl shadow-2xl shadow-black">
          <CardContent className="p-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-2"
            >
              <h1 className="text-white text-3xl font-bold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-stone-400 text-sm">
                Enter your details to access your account
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-2"
            >
              <label className="text-sm text-white">Email Address</label>
              <Input
                type="email"
                placeholder="name@example.com"
                className="h-12 bg-neutral-900 border-stone-800 text-white placeholder:text-stone-400 focus-visible:ring-amber-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <label className="text-sm text-white">Password</label>
              </div>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-12 bg-neutral-900 border-stone-800 text-white placeholder:text-stone-400 focus-visible:ring-amber-300"
              />
            </motion.div>

            <MotionButton
              whileHover={{ scale: 1.01 }}
              className="w-full h-12 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 active:scale-[0.98] transition-all"
            >
              Sign in
            </MotionButton>

            <div className="text-center text-xs py-1 text-stone-400">
              OR CONTINUE WITH
            </div>

            <MotionButton
              variant="outline"
              whileHover={{ scale: 1.01 }}
              className="w-full h-12 border-yellow-400/40 text-white hover:bg-yellow-400/10"
            >
              <GoogleIcon />
              Continue with Google
            </MotionButton>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-sm text-stone-300"
            >
              Don’t have an account?
              <Link
                href="/sign-up"
                className="ml-1 text-amber-300 font-semibold"
              >
                Sign Up
              </Link>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
