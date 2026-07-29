"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Shield, Clock, Headphones } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Shield, title: "100% Secure", desc: "Encrypted transactions" },
  { icon: Clock, title: "Instant Delivery", desc: "Automated 24/7" },
  { icon: Headphones, title: "24/7 Support", desc: "Live chat & tickets" },
];

export default function FeaturedBanner() {
  return (
    <section className="section-padding py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-royal-600 via-royal-700 to-royal-800 p-8 md:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" /> New Feature
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                AI-Powered Product Recommendations
              </h2>
              <p className="text-white/70 max-w-lg">
                Our new AI engine analyzes your preferences to suggest the perfect digital products. 
                Smarter shopping, better deals, personalized just for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-6">
                {features.map((f) => (
                  <div key={f.title} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                      <f.icon className="w-5 h-5 text-gold-300" />
                    </div>
                    <div className="text-xs font-medium text-white">{f.title}</div>
                    <div className="text-[10px] text-white/50">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/ai-recommendations"
                className="px-6 py-3 rounded-xl bg-white text-royal-700 font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Try It Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
