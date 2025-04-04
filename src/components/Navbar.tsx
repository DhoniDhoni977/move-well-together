
import React from "react";
import { Heart, Menu, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Find Buddies", href: "#buddies" },
    { name: "Workouts", href: "#workouts" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-fitness-teal" />
          <span className="font-bold text-xl text-fitness-navy">
            MoveWellTogether
          </span>
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-fitness-navy hover:text-fitness-teal"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-fitness-navy hover:text-fitness-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-fitness-navy">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-fitness-navy">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
