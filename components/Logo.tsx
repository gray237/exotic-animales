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
          w-17 h-11 md:w-18 md:h-12 rounded-xl md:rounded-2xl
          grid place-items-center
          bg-linear-to-br from-purple-500/25 to-emerald-400/25
          border border-black/10
          shadow-md
        "
      >
        <Image
          src={exoticPetsLogo}
          alt=""
          width={48}
          height={48}
          priority
          className="object-contain"
        />
      </span>

      {/* Brand text */}
      <span className={cn(
        "leading-tight",
        showMobileText ? "block" : "hidden sm:block"
      )}>
        <span
          className="block brand-bold tracking-tight text-[17px] md:text-lg text-gray-700 leading-snug">
          Exotic Animales
        </span>
        <span
          className="block text-[13px] md:text-sm mt-0.3 text-shop_dark_green/80 leading-snug">
          Exotic Pets For Sale
        </span>
      </span>
    </Link>
  );
};

export default Logo;