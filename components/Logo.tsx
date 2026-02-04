import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { exoticPetsLogo } from "@/images";

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Link
      href="/"
      aria-label="Exotic Pets Ranch home"
      className={cn(
        "flex items-center gap-2 min-w-[220px] group transition-transform duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      {/* Brand mark */}
      <span
        aria-hidden="true"
        className="
          w-18 h-12 rounded-2xl
          grid place-items-center
          bg-linear-to-br from-purple-500/25 to-emerald-400/25
          border border-black/10
          shadow-md
        "
      >
        <Image
          src={exoticPetsLogo}
          alt=""
          width={50}
          height={50}
          priority
          className="object-contain"
        />
      </span>

      {/* Brand text */}
      <span className="hidden sm:block leading-tight">
        <span
          className="block brand-bold tracking-tight text-lg text-gray-700 leading-snug">
          E.A Ranch
        </span>
        <span
          className="block text-sm mt-0.3 text-shop_dark_green/80 leading-snug">
          Exotic Pets For Sale
        </span>
      </span>
    </Link>
  );
};

export default Logo;
