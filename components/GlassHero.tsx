"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

type GlassHeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  image: any;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
};

const GlassHero = ({
  badge,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: GlassHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-white to-white/95 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white shadow">
              {badge}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              {subtitle}
            </p>
          )}

          <div className="flex gap-4 flex-wrap pt-2">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[14px]
                border border-purple-400/40
                bg-linear-to-br from-purple-500/25 to-teal-400/20
                font-semibold shadow-lg
                transition-transform duration-200 ease-in-out
                hover:-translate-y-0.5 hover:shadow-xl"
              >
                <FaPaperPlane className="text-purple-600" />
                {primaryCta.label}
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px]
                border border-gray-300 bg-transparent font-semibold shadow
                transition-transform hover:-translate-y-1"
              >
                {secondaryCta.icon}
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[420px] rounded-[22px] overflow-hidden border border-gray-200 shadow-lg"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              background:
                "radial-gradient(600px 380px at 30% 15%, rgba(107,77,255,0.26), transparent 60%), radial-gradient(520px 320px at 80% 70%, rgba(20,184,166,0.22), transparent 60%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlassHero;
