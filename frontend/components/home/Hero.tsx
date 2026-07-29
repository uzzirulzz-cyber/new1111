"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Shield, Zap, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

const stats = [
  { icon: Users, value: "50K+", label: "Active Customers" },
  { icon: Zap, value: "99.9%", label: "Uptime" },
  { icon: Shield, value: "100%", label: "Secure" },
  { icon: TrendingUp, value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-900/30 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 section-padding w-full py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-500/10 border border-royal-500/20 text-royal-300 text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                #1 Digital Marketplace Worldwide
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Your Digital
                <span className="block text-gradient">Universe Awaits</span>
              </h1>

              <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
                Premium digital products, streaming subscriptions, software licenses, and AI services — 
                all in one powerful marketplace. Instant delivery. Global access. Enterprise security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/category/gaming" className="btn-gold flex items-center justify-center gap-2 text-base px-8 py-4">
                  Explore Store <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                  <Play className="w-5 h-5 text-royal-400" /> Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <stat.icon className="w-4 h-4 text-royal-400" />
                      <span className="text-xl font-bold text-white">{stat.value}</span>
                    </div>
                    <span className="text-xs text-white/40">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Featured Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Orbiting Cards */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FloatingCard icon="🎮" title="Gaming" color="from-purple-500/20 to-purple-600/10" />
                  </div>
                  <div className="absolute top-1/4 right-0 translate-x-1/2">
                    <FloatingCard icon="🎬" title="Streaming" color="from-red-500/20 to-red-600/10" />
                  </div>
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2">
                    <FloatingCard icon="🤖" title="AI Services" color="from-emerald-500/20 to-emerald-600/10" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <FloatingCard icon="💳" title="Gift Cards" color="from-gold-500/20 to-gold-600/10" />
                  </div>
                  <div className="absolute bottom-1/4 left-0 -translate-x-1/2">
                    <FloatingCard icon="📺" title="IPTV" color="from-blue-500/20 to-blue-600/10" />
                  </div>
                  <div className="absolute top-1/4 left-0 -translate-x-1/2">
                    <FloatingCard icon="💻" title="Software" color="from-cyan-500/20 to-cyan-600/10" />
                  </div>
                </motion.div>

                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-royal-500/20 to-gold-500/10 blur-2xl" />
                  <div className="absolute w-32 h-32 rounded-full bg-royal-500/10 border border-royal-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">10K+</div>
                      <div className="text-xs text-white/50">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, color }: { icon: string; title: string; color: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${color} backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-1 shadow-xl`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-[10px] font-medium text-white/80">{title}</span>
    </motion.div>
  );
}
