// components/Drawer.tsx
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import { FooterCopyright } from "../footer";
  
const NavbarDrawer =() => {
return (
    <Sheet>
        {/* Trigger Button */}
        <SheetTrigger asChild>
            <Button variant="outline">
                <Menu />
            </Button>
        </SheetTrigger>

        {/* Drawer Content */}
        <SheetContent side="right" className="w-full md:hidden z-[9999999]">
            <SheetHeader>
                <SheetTitle>
                    <NavbarLogo />
                </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col space-y-4">
                <NavbarLink href="#"><SheetClose className="text-left w-full text-lg">Features</SheetClose></NavbarLink>
                <NavbarLink href="#"><SheetClose className="text-left w-full text-lg">Testimonials</SheetClose></NavbarLink>
                <NavbarLink href="#"><SheetClose className="text-left w-full text-lg">Pricing</SheetClose></NavbarLink>
            </div>

            <div>
                <NavbarLink href="#"><SheetClose className="px-4 py-2 font-medium bg-primary text-white hover:bg-white hover:text-primary animation duration-300 rounded-lg w-full">Login</SheetClose></NavbarLink>
                <NavbarLink href="#"><SheetClose className="w-full text-lg outline-1 outline-primary hover:bg-primary hover:text-white px-4 py-2 font-medium rounded-lg text-primary">Get Started</SheetClose></NavbarLink>
            </div>
            
            <SheetFooter>
                <FooterCopyright />
            </SheetFooter>
        </SheetContent>
    </Sheet>
);
}

export default NavbarDrawer;