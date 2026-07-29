"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/types";

const flashProducts: Product[] = [
  {
    id: "f1",
    name: "Disney+ Premium Annual",
    slug: "disney-plus-annual",
    description: "Annual subscription with 4K streaming. Limited time offer.",
    price: 49.99,
    originalPrice: 109.99,
    category: "Streaming",
    images: [],
    rating: 4.8,
    reviewCount: 1234,
    stock: 23,
    tags: ["streaming", "disney", "limited"],
    features: ["4K HDR", "4 Screens", "Downloads", "Marvel & Star Wars"],
    specifications: { "Duration": "1 Year", "Region": "Global" },
    isOnSale: true,
    discount: 55,
    deliveryType: "instant",
    licenseType: "subscription",
    createdAt: "2024-01-01",
  },
  {
    id: "f2",
    name: "Adobe Creative Cloud",
    slug: "adobe-creative-cloud",
    description: "All apps plan. Photoshop, Premiere, Illustrator & more.",
    price: 39.99,
    originalPrice: 84.99,
    category: "Software",
    images: [],
    rating: 4.7,
    reviewCount: 876,
    stock: 15,
    tags: ["software", "adobe", "design"],
    features: ["20+ Apps", "100GB Cloud", "Fonts", "Portfolio"],
    specifications: { "Duration": "1 Month", "Apps": "All" },
    isOnSale: true,
    discount: 53,
    deliveryType: "instant",
    licenseType: "subscription",
    createdAt: "2024-01-01",
  },
  {
    id: "f3",
    name: "Xbox Game Pass Ultimate",
    slug: "xbox-game-pass-ultimate",
    description: "100+ games, Xbox Live Gold, EA Play included. 3 months.",
    price: 24.99,
    originalPrice: 44.99,
    category: "Gaming",
    images: [],
    rating: 4.9,
    reviewCount: 2341,
    stock: 45,
    tags: ["gaming", "xbox", "game-pass"],
    features: ["100+ Games", "Cloud Gaming", "EA Play", "Day One Releases"],
    specifications: { "Duration": "3 Months", "Platform": "Xbox & PC" },
    isOnSale: true,
    discount: 44,
    deliveryType: "instant",
    licenseType: "subscription",
    createdAt: "2024-01-01",
  },
  {
    id: "f4",
    name: "YouTube Premium Family",
    slug: "youtube-premium-family",
    description: "Ad-free YouTube, YouTube Music, background play. Family plan.",
    price: 9.99,
    originalPrice: 17.99,
    category: "Streaming",
    images: [],
    rating: 4.6,
    reviewCount: 1567,
    stock: 34,
    tags: ["streaming", "youtube", "music"],
    features: ["Ad-Free", "Background Play", "Downloads", "YouTube Music"],
    specifications: { "Duration": "1 Month", "Members": "6" },
    isOnSale: true,
    discount: 44,
    deliveryType: "instant",
    licenseType: "subscription",
    createdAt: "2024-01-01",
  },
];

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-gold-400" />
      <div className="flex items-center gap-1">
        {Object.entries(time).map(([key, value], i) => (
          <div key={key} className="flex items-center gap-1">
            <span className="px-2 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold font-mono">
              {String(value).padStart(2, "0")}
            </span>
            {i < 2 && <span className="text-gold-400/50">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FlashSale() {
  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass p-6 md:p-8 border-gold-500/10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Flash <span className="text-gold-400">Sale</span>
                </h2>
                <p className="text-sm text-white/50">Limited time offers ending soon</p>
              </div>
            </div>
            <CountdownTimer />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {flashProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
