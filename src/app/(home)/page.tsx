import { SearchForm } from "@/components";
import { format } from "date-fns";
import { HeroCarousel } from "./hero-carousel";

export default function Home() {
  return (
    <div>
      <section className="flex items-center justify-between px-32 py-16 h-[28rem] bg-no-repeat bg-cover bg-slate-950/30">
        <div className="space-y-11">
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

        <div className="flex flex-col gap-5">
          <span className="bold-sm text-gray-300">RECOMENDADOS</span>
          <HeroCarousel />
        </div>
      </section>
    </div>
  );
}
