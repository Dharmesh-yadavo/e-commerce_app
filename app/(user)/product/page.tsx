"use client";

import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingBag,
  Heart,
  Share2,
} from "lucide-react";
import Image from "next/image";

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-10 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-8">
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <span>/</span>
          <a href="/categories/electronics" className="hover:text-yellow-400">
            Electronics
          </a>
          <span>/</span>
          <span className="text-white">WH-1000XM5 Wireless</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Image Gallery (7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-square bg-stone-900 rounded-[2.5rem] relative overflow-hidden border border-stone-800">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByNxBXhlxZ8KbJ3VLRqaGwlJTFG3rdo_Z4n2AYbL9mOeTSglNfvt5XGWf6Q--KzWgDJXVz0Pk4GdgZkICEZXRkubMjVi7iH84ArfjXBMaXH36aLLB4PZLji4NPGBco5LItmUAO3-QByHMlfAdQU6RvnwV9LLLvHqm9ahO795EePMBBMgQvvWKgagGmi8rVFF52GcWWZy8semFymiE4m9vKF4AcWgIKDStoL8J5XnFAcRnQuvpFHdBSv_uPeInu5KWO7qUGY955U96D"
                alt="Product View"
                fill
                className="object-contain p-12"
              />
              <span className="absolute top-8 left-8 bg-yellow-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                Bestseller
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-stone-900 rounded-2xl border border-stone-800 cursor-pointer hover:border-yellow-400/50 transition-all"
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-2">
                    Sony Performance
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tighter">
                    WH-1000XM5 Wireless
                  </h1>
                </div>
                <button className="p-3 bg-stone-900 border border-stone-800 rounded-full hover:bg-red-500/10 hover:text-red-500 transition-all">
                  <Heart size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-stone-400 text-sm font-bold underline cursor-pointer">
                  1.2k Reviews
                </span>
              </div>
            </div>

            <div className="py-6 border-y border-stone-800">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-white">$348.00</span>
                <span className="text-stone-500 line-through text-lg">
                  $399.00
                </span>
                <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-2 py-1 rounded">
                  Save 15%
                </span>
              </div>
              <p className="text-stone-400 text-sm mt-4 leading-relaxed">
                Industry-leading noise cancellation optimized to your
                environment. Equipped with two processors controlling eight
                microphones.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full h-16 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(250,204,21,0.3)]">
                <ShoppingBag size={20} /> Add to Cart
              </button>
              <button className="w-full h-16 bg-transparent border-2 border-stone-800 hover:bg-white/5 text-white font-bold text-lg rounded-2xl transition-all">
                Buy It Now
              </button>
            </div>

            {/* Shipping/Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-stone-900/50 rounded-2xl border border-stone-800">
                <Truck className="text-yellow-400" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase text-white">
                    Free Delivery
                  </p>
                  <p className="text-[10px] text-stone-500">Orders over $200</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-900/50 rounded-2xl border border-stone-800">
                <RotateCcw className="text-yellow-400" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase text-white">
                    30-Day Returns
                  </p>
                  <p className="text-[10px] text-stone-500">
                    Hassle-free policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
