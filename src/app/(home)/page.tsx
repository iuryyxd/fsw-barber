import { SearchForm, Carousel } from "@/components";
import { formatFullDate } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <section className="relative flex items-center justify-between px-32 py-16 w-full h-[28.9375rem] bg-[url('/assets/hero.jpg')] bg-no-repeat bg-cover bg-slate-950/30">
        <div className="space-y-11 z-[1] self-start">
          <div className="flex flex-col">
            <span className="regular-2xl text-white">
              Olá, <b>Faça seu login!</b>
            </span>
            <span className="regular-sm text-white">
              {formatFullDate(new Date())}
            </span>
          </div>

          <div className="w-[439px]">
            <SearchForm />
          </div>
        </div>

        <div className="flex flex-col gap-5 z-[1]">
          <span className="bold-sm text-gray-300">RECOMENDADOS</span>
          <Carousel className="max-w-[32rem]" size={4} />
        </div>

        <div className="w-full h-full left-0 absolute bg-black/85 z-0" />
      </section>

      <section className="py-10 px-32 space-y-5">
        <span className="bold-xl text-white">Populares</span>
        <Carousel size={10} />
      </section>

      <section className="pt-10 px-32 space-y-5">
        <span className="bold-xl text-white">Mais visitados</span>
        <Carousel size={10} />
      </section>
    </div>
  );
}
