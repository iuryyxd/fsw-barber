import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button, Input } from "@/components";
import { CalendarDays, CircleUserRound, Search } from "lucide-react";

export function Header() {
  return (
    <div className="bg-background w-full py-[1.875rem] px-32 flex items-center justify-between">
      <Image src={Logo} alt="FSW Barber logo" />

      <form className="max-w-[36rem] w-full flex items-center gap-2">
        <Input placeholder="Buscar Barbearias" />
        <button
          type="submit"
          className="w-10 h-9 rounded-lg p-[.625rem] bg-primary grid place-content-center hover:bg-primary/80 transition-colors"
        >
          <Search size={20} />
        </button>
      </form>

      <div className="flex items-center gap-6">
        <Button variant="outline">
          <CalendarDays size={16} /> Agendamentos
        </Button>

        <Button>
          <CircleUserRound size={16} />
          Perfil
        </Button>
      </div>
    </div>
  );
}
