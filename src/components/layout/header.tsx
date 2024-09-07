"use client";

import Image from "next/image";
import Logo from "/public/assets/logo.png";
import { Button, SearchForm } from "@/components";
import { CalendarDays, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-background w-full py-[1.875rem] px-32 flex items-center justify-between">
      <Image src={Logo} alt="FSW Barber logo" />

      {pathname === "/" ? null : <SearchForm />}

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
