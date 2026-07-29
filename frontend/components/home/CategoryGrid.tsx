"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Gamepad2,
  Monitor,
  Wifi,
  Bot,
  Tv,
  Gift,
  TrendingUp,
  Server,
  GraduationCap,
  Bitcoin,
  ArrowRight,
} from "lucide-react";

const categories = [
  { name: "Gaming", icon: Gamepad2, slug: "gaming", count: 1250, color: "from-purple-500/20 to-purple-600/5", iconColor: "text-purple-400" },
  { name: "Software", icon: Monitor, slug: "software", count: 890, color: "from-cyan-500/20 to-cyan-600/5", iconColor: "text-cyan-400" },
  { name: "Streaming", icon: Wifi, slug: "streaming", count: 650, color: "from-red-500/20 to-red-600/5", iconColor: "text-red-400" },
  { name: "AI Services", icon: Bot, slug: "ai-services", count: 420, color: "from-emerald-500/20 to-emerald-600/5", iconColor: "text-emerald-400" },
  { name: "IPTV", icon: Tv, slug: "iptv", count: 380, color: "from-blue-500/20 to-blue-600/5", iconColor: "text-blue-400" },
  { name: "Gift Cards", icon: Gift, slug: "gift-cards", count: 720, color: "from-gold-500/20 to-gold-600/5", iconColor: "text-gold-400" },
  { name: "Marketing", icon: TrendingUp, slug: "digital-marketing", count: 340, color: "from-orange-500/20 to-orange-600/5", iconColor: "text-orange-400" },
  { name: "Cloud", icon: Server, slug: "cloud-servers", count: 280, color: "from-indigo-500/20 to-indigo-600/5", iconColor: "text-indigo-400" },
  { name: "Education", icon: GraduationCap, slug: "education", count: 560, color: "from-pink-500/20 to-pink-600/5", iconColor: "text-pink-400" },
  { name: "Crypto", icon: Bitcoin, slug: "crypto", count: 190, color: "from-yellow-500/20 to-yellow-600/5", iconColor: "text-yellow-400" },
];

export default function CategoryGrid() {
  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-royal-400 text-sm font-medium uppercase tracking-widest mb-3 block">Browse Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our <span className="text-gradient">Digital Ecosystem</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From gaming to AI, streaming to cloud infrastructure — find everything you need in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/category/${cat.slug}`}
                className="group block p-5 rounded-2xl bg-gradient-to-br border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-white/40">{cat.count.toLocaleString()} products</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
