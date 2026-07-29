"use client";

import Link from "next/link";
import { Crown, Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Youtube, Github, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  products: [
    { name: "Gaming", href: "/category/gaming" },
    { name: "Software", href: "/category/software" },
    { name: "Streaming", href: "/category/streaming" },
    { name: "IPTV", href: "/category/iptv" },
    { name: "Gift Cards", href: "/category/gift-cards" },
    { name: "AI Services", href: "/category/ai-services" },
  ],
  support: [
    { name: "Help Center", href: "/support" },
    { name: "Track Order", href: "/track-order" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Contact Us", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Stripe", "Crypto", "USDT"];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-navy-900 border-t border-white/5">
      {/* Newsletter Section */}
      <div className="section-padding py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Ahead of the <span className="text-gold-400">Digital Curve</span>
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Subscribe to get exclusive deals, new product alerts, and insider tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-royal-500 transition-all"
                />
              </div>
              <button className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center shadow-lg shadow-royal-500/20">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">PlayBeat</span>
                <span className="text-xs text-gold-400 block -mt-1 font-medium tracking-widest uppercase">Digital</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm mb-6 max-w-xs">
              Your premier destination for digital products, streaming subscriptions, software licenses, and AI services worldwide.
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-royal-400 shrink-0" />
                <span>Global Digital Marketplace</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-royal-400 shrink-0" />
                <span>support@playbeat.digital</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-royal-400 shrink-0" />
                <span>24/7 Live Support</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} PlayBeat Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-3 py-1 rounded-md bg-white/5 text-xs text-white/50 border border-white/5"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-royal-600 text-white shadow-lg shadow-royal-500/30 hover:bg-royal-500 transition-all hover:scale-110 z-30 flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
