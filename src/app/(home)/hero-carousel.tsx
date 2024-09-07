import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ShopCard,
} from "@/components";

export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-[38rem]">
      <CarouselContent>
        <CarouselItem className="mr-5 grow-0 shrink-0 basis-auto">
          <ShopCard
            address="Avenida São Sebastião, 357, São Paulo"
            barberName="Vintage Barber"
            image="/assets/cardbg-20.png"
            rating={5.0}
          />
        </CarouselItem>

        <CarouselItem className="mr-5 grow-0 shrink-0 basis-auto">
          <ShopCard
            address="Avenida São Sebastião, 357, São Paulo"
            barberName="Vintage Barber"
            image="/assets/cardbg-20.png"
            rating={5.0}
          />
        </CarouselItem>

        <CarouselItem className="mr-5 grow-0 shrink-0 basis-auto">
          <ShopCard
            address="Avenida São Sebastião, 357, São Paulo"
            barberName="Vintage Barber"
            image="/assets/cardbg-20.png"
            rating={5.0}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
