import {
  CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ShopCard,
} from "@/components";
import { cn } from "@/lib/utils";

interface CarouselProps {
  className?: string;
  size: number;
}

export function Carousel({ className, size }: CarouselProps) {
  return (
    <CarouselRoot className={cn("w-full", className)}>
      <CarouselContent>
        {Array.from({ length: size }).map((_, index) => (
          <CarouselItem key={index} className="grow-0 shrink-0 basis-auto">
            <ShopCard
              address="Avenida São Sebastião, 357, São Paulo"
              barberName="Vintage Barber"
              image="/assets/cardbg-20.png"
              rating={5.0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  );
}
