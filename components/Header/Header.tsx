import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md: px-6">
      <nav className="flex gap-6 text-lg font-medium">
        <Link className="text-lg font-semibold" href="/">
          Movies
        </Link>
        <Link className="text-lg font-semibold" href="/fnb">
          Food & Beverage
        </Link>
        <Link className="text-lg font-semibold" href="/offers">
          Offers
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white drop-shadow p-2">
          <DropdownMenuItem>My Account</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Purchases</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
