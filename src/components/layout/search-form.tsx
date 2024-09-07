import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SearchForm() {
  return (
    <form className="max-w-[36rem] w-full flex items-center gap-2">
      <Input placeholder="Buscar Barbearias" />
      <button
        type="submit"
        className="w-10 h-9 rounded-lg p-[.625rem] bg-primary grid place-content-center hover:bg-primary/80 transition-colors"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
