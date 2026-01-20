import React from "react";
import Image from "next/image";
import { Title } from "./ui/text";
import {
  exoticAnimalsRanch,
  exoticAnimalsTexas,
  exoticPetBreeder,
} from "@/images";


const FeaturedSection = () => {
  return (
    <section className="py-15 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="space-y-6 max-w-xl">
          <Title>Exotic Animals Ranch: Hand-Raised & Rare Exotic Pets for Sale</Title>
          <p className="text-gray-700 leading-relaxed">
            E.A Ranch is a premier USDA-Licensed exotic animals breeder and conserver for endangered species. We offer the <a href="/shop.html">best selection of exotic pets</a>; baby hedgehogs, sugar gliders, fennec foxes, lemurs, snakes, axolotls, rodents, and more. As a trusted source for hand-raised companion, our professional service starts with family values, ensuring that every animal in our care receive individualized attention and specialized nutrition required to thrive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By focusing on health, temperament, and lifetime breeder support, E.A Ranch has become a nationwide leader for keepers seeking healthy, vibrant, and well-socialized animals with premium lineage. If you are considering buying an exotic pet, <a href="/contact.html">contact us to discover</a> why families and exotic enthusiasts have trusted us since 2018 to bridge the gap between nature and the modern home.
          </p>
        </div>

        {/* RIGHT COLUMN – IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 h-[420px]">
          {/* LEFT STACK (2 SHORT IMAGES) */}
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={exoticAnimalsRanch}
                alt="Exotic Animals Ranch"
                fill
                className="object-cover"
              />
              <Overlay title="Exotic Animals Ranch" />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={exoticAnimalsTexas}
                alt="Exotic Animals Texas"
                fill
                className="object-cover hover:scale-110 hoverEffect"
              />
              <Overlay title="Exotic Pets For Sale" />
            </div>
          </div>

          {/* RIGHT TALL IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={exoticPetBreeder}
              alt="Exotic Pet Breeder"
              fill
              className="object-cover"
            />
            <Overlay title="Trusted Exotic Pet Breeder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

/* ---------- Overlay Component ---------- */

const Overlay = ({ title }: { title: string }) => {
  return (
    <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-5">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>
  );
};
