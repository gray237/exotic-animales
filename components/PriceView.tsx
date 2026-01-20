import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  const hasDiscount = discount !== undefined && discount > 0;

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        {/* Final / current price */}
        <PriceFormatter
          amount={price}
          className={cn("text-shop_dark_green font-semibold", className)}
        />

        {/* Show old price only if discount > 0 */}
        {price && hasDiscount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className={twMerge(
              "line-through text-xs font-normal text-zinc-500",
              className
            )}
          />
        )}
      </div>
    </div>
  );
};


export default PriceView;
