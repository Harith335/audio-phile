import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  return (
    <header className="bg-gray-950">
      <nav className="max-w-[1100px]  mx-auto p-4 border-b border-gray-500 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">audiophile</h1>
        <ul className="hidden md:flex text-gray-100 gap-8">
          <li>Home</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
        <ShoppingCart className=" hidden md:block text-white" />
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-8">
                  <Label htmlFor="Home">Home</Label>
                  <Label htmlFor="HEADPHONES">HEADPHONES</Label>
                  <Label htmlFor="SPEAKERS">SPEAKERS</Label>
                  <Label htmlFor="EARPHONES">EARPHONES</Label>
                </div>
              </div>
              <SheetFooter>
                <ShoppingCart />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
