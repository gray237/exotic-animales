import Image from "next/image";
import Link from "next/link";
import {
  exoticPetAdoption,
  exoticPetStore,
  exoticPetFeeders,
  exoticPetCare,
} from "@/images";
import {
  PawPrint,
  ShoppingBag,
  Utensils,
  ClipboardList,
} from "lucide-react";

const items = [
  {
    title: "Exotic Animals",
    image: exoticPetAdoption,
    icon: PawPrint,
    href: "#",
  },
  {
    title: "Pet Supplies",
    image: exoticPetStore,
    icon: ShoppingBag,
    href: "#",
  },
  {
    title: "Pet Feeders",
    image: exoticPetFeeders,
    icon: Utensils,
    href: "#",
  },
  {
    title: "Pet Care Sheets",
    image: exoticPetCare,
    icon: ClipboardList,
    href: "#",
  },
];

const HomeBanner = () => {
  return (
    <section className="relative w-screen -mx-4 sm:-mx-6 md:-mx-8 h-[90vh] sm:h-[95vh] md:h-[85vh] lg:h-[70vh]">
      {/* PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex h-full">
        {items.map(({ title, image, icon: Icon, href }) => (
          <Link
            key={title}
            href={href}
            aria-label={title}
            className="
              group relative overflow-hidden
              min-h-[50vw] sm:min-h-[45vw] md:min-h-[40vh] lg:min-h-full
              lg:flex-1
              lg:transition-[flex] lg:duration-700 lg:ease-out
              lg:hover:flex-[1.25]
              block
            "
          >
            {/* IMAGE */}
            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover
                transition duration-700
                brightness-75 group-hover:brightness-100
                scale-100 group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition duration-700" />

            {/* TITLE BAR */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
              <div
                className="
                  flex items-center gap-3
                  px-6 py-4 w-full justify-center
                  text-white font-semibold uppercase tracking-widest
                  transition duration-500
                  group-hover:bg-black/60
                  group-hover:text-yellow-400
                "
              >
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* GLOBAL EXPLORE */}
      <div
        className="
          pointer-events-none absolute
          bottom-6 sm:bottom-8 md:bottom-10
          left-1/2 -translate-x-1/2 z-20
          text-white font-extrabold
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          tracking-[0.3em] sm:tracking-[0.35em] lg:tracking-[0.4em]
        "
      >
        EXPLORE
      </div>
    </section>
  );
};

export default HomeBanner;
