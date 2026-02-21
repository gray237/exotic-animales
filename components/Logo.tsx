import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { exoticPetsLogo } from "@/images";

const Logo = ({
  className,
  showMobileText = false,
}: {
  className?: string;
  showMobileText?: boolean;
}) => {
  return (
    <Link
      href="/"
      aria-label="Exotic Pets Ranch home"
      className={cn(
        "flex items-center gap-2 group transition-transform duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      {/* Brand mark */}
      <span
        aria-hidden="true"
        className="
          w-17 h-11 lg:w-18 lg:h-12 rounded-xl lg:rounded-2xl
          grid place-items-center
          bg-linear-to-br from-purple-500/25 to-emerald-400/25
          border border-black/10
          shadow-md
        "
      >
        <Image
          src={exoticPetsLogo}
          alt="Exotic Animales"
          width={48}
          height={48}
          priority
          className="object-contain"
          unoptimized
        />
      </span>

      {/* Brand text */}
      <span className={cn(
        "leading-tight",
        showMobileText ? "block" : "hidden sm:block"
      )}>
        <span
          className="block brand-bold tracking-tight text-[16px] lg:text-[17px] text-gray-700 leading-snug">
          Exotic Animales
        </span>
        <span
          className="block text-[12px] lg:text-[13px] text-shop_dark_green/80 leading-snug">
          Exotic Pets For Sale
        </span>
      </span>
    </Link>
  );
};

export default Logo;