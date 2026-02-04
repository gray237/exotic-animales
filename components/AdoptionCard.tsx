"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Ban, Gem } from "lucide-react";
import { Pet } from "@/app/(client)/adopt/adoptionData";

interface AdoptionCardProps {
  pet: Pet;
}

export default function AdoptionCard({ pet }: AdoptionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="premium-tilt relative w-[300px] sm:w-[340px] md:w-[380px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
      {/* STATUS BADGE */}
      {pet.sold ? (
        <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-linear-to-br from-zinc-900 to-zinc-700 text-white text-xs font-semibold px-3 py-1 rounded-xl uppercase tracking-wide shadow-md">
          <Ban className="w-3.5 h-3.5 text-amber-400" />
          Sold Out
        </span>
      ) : (
        <span className="absolute top-4 right-4 z-10 bg-linear-to-br from-amber-600 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-xl uppercase tracking-wide shadow-md flex items-center gap-1">
          <Gem className="w-3 h-3" />
          Available
        </span>
      )}
      <div className="h-60 relative overflow-hidden rounded-t-2xl">
        <Image
          src={pet.image}
          alt={pet.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-2">
          {pet.name}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
          {pet.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {pet.features.map((feature) => (
            <span
              key={feature}
              className="text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-zinc-900 dark:text-white">
            ${pet.price}
          </span>

          <button className="group flex items-center gap-2 bg-linear-to-br from-amber-600 to-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            Reserve
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-[-10deg] group-hover:scale-110" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
