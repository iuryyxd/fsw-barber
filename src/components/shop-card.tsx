import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components";
import { Star } from "lucide-react";
import Image from "next/image";

interface ShopCardProps {
  rating: number;
  barberName: string;
  address: string;
  image: string;
}

export function ShopCard({
  address,
  barberName,
  image,
  rating,
}: ShopCardProps) {
  return (
    <Card>
      <div className="absolute top-2 left-2 w-14 h-6 flex items-center gap-1 rounded-2xl py-1 px-[10px] bg-dark-purple/70 backdrop-blur-[5px]">
        <Star fill="#8162FF" className="text-primary" />
        <span className="bold-xs text-white">{rating.toFixed(1)}</span>
      </div>
      <div className="w-full h-[159px]">
        <Image
          width={439}
          height={159}
          src={image}
          alt={barberName}
          className="rounded-2xl h-full object-cover pt-1 px-1"
        />
      </div>
      <CardContent className="flex flex-col gap-3">
        <div className="space-y-1">
          <CardTitle>{barberName}</CardTitle>
          <CardDescription>{address}</CardDescription>
        </div>

        <Button className="w-full" variant="secondary">
          Reservar
        </Button>
      </CardContent>
    </Card>
  );
}
