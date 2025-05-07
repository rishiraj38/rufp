"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Problem", path: "/problem" },
  { name: "Methodology", path: "/methodology" },
  { name: "Analysis", path: "/analysis" },
  { name: "Findings", path: "/findings" },
  { name: "References", path: "/references" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="container flex h-16 items-center justify-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-tight"
          >
            Systems Thinking
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 justify-center items-center">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition duration-300 hover:text-cyan-400",
                pathname === route.path ? "" : "text-gray-400"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-none bg-gray-800 hover:bg-gray-700"
            >
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          >
            <div className="flex flex-col gap-6 mt-12">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-semibold transition duration-300 hover:text-cyan-400",
                    pathname === route.path ? "text-cyan-400" : "text-gray-300"
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
