import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarDrawer from "./NavbarDrawer";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky py-4 top-0 z-[999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <NavbarLogo />
                    <div className="hidden md:flex items-center space-x-4">
                        <NavbarLink href="#">Features</NavbarLink>
                        <NavbarLink href="#">Testimonials</NavbarLink>
                        <NavbarLink href="#">Pricing</NavbarLink>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavbarLink href="#" className="text-primary hover:text-secondary px-4 py-2 font-medium">Login</NavbarLink>
                        <NavbarLink href="#" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-medium transition duration-300">Get Started</NavbarLink>
                    </div>
                    <div className="md:hidden flex items-center" id="mobile-menu">
                        <NavbarDrawer />
                    </div>
                </div>
            </div>
        </nav>
    )
}