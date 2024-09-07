import { SearchForm } from "@/components";
import { format } from "date-fns";
import { HeroCarousel } from "./hero-carousel";

export default function Home() {
  return (
    <div>
      <section className="relative flex items-center justify-between px-32 py-16 w-full h-[28.9375rem] bg-[url('/assets/hero.jpg')] bg-no-repeat bg-cover bg-slate-950/30">
        <div className="space-y-11 z-[1] self-start">
          <div className="flex flex-col">
            <span className="regular-2xl">
              Olá, <b>Faça seu login!</b>
            </span>
            <span className="regular-sm">
              {format(new Date(), "eeee',' e 'de' MMMM")}
            </span>
          </div>

          <div className="w-[439px]">
            <SearchForm />
          </div>
        </div>

        <div className="flex flex-col gap-5 z-[1]">
          <span className="bold-sm text-gray-300">RECOMENDADOS</span>
          <HeroCarousel />
        </div>

        <div className="w-full h-full left-0 absolute bg-black/85 z-0" />
      </section>
    </div>
  );
}
