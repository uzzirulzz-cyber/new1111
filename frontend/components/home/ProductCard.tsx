"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Zap, Clock, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: "default" | "compact" | "featured";
}

export default function ProductCard({ product, index = 0, variant = "default" }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0;

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative card-glass overflow-hidden"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10" />
          <div
            className={cn(
              "w-full h-full bg-gradient-to-br transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            style={{
              background: `linear-gradient(135deg, ${product.category === "gaming" ? "#4c1d95" : product.category === "streaming" ? "#991b1b" : "#1e40af"} 0%, #071326 100%)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">{product.name.charAt(0)}</span>
            </div>
          </div>

          {discount > 0 && (
            <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-lg">
              -{discount}%
            </div>
          )}

          {product.deliveryType === "instant" && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg border border-emerald-500/20">
              <Zap className="w-3 h-3" /> Instant
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Heart className={cn("w-4 h-4", isLiked ? "text-red-400 fill-red-400" : "text-white")} />
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-royal-400 font-medium uppercase tracking-wider">{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
              <span className="text-xs text-white/60">{product.rating}</span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-white/50 mb-4 line-clamp-2">{product.description}</p>

          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-white/30 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              <span className="text-xs text-white/40">{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
            </div>

            <button className="w-10 h-10 rounded-xl bg-royal-600 flex items-center justify-center hover:bg-royal-500 transition-colors shadow-lg shadow-royal-500/20">
              <ShoppingCart className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative card-glass overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <div
          className={cn(
            "w-full h-full bg-gradient-to-br transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
          style={{
            background: `linear-gradient(135deg, ${product.category === "gaming" ? "#4c1d95" : product.category === "streaming" ? "#991b1b" : "#1e40af"} 0%, #071326 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-20">{product.name.charAt(0)}</span>
          </div>
        </div>

        {discount > 0 && (
          <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-gold-500 text-navy-950 text-[10px] font-bold rounded-md">
            -{discount}%
          </div>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className={cn("w-3.5 h-3.5", isLiked ? "text-red-400 fill-red-400" : "text-white")} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-2 rounded-lg bg-royal-600 text-white text-sm font-medium hover:bg-royal-500 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-royal-400 font-medium uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span className="text-[10px] text-white/50">{product.rating}</span>
          </div>
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-white mb-1 group-hover:text-gold-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold text-white">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-white/30 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          {product.deliveryType === "instant" && (
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
