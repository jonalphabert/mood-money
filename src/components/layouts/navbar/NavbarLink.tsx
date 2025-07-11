import Link from "next/link";
import { NavbarLinkProps } from "./type";

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, className, children }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            
        >
            <div className={ className ? className :"text-gray-600 hover:text-primary px-4 py-2 font-medium"}>
                {children}
            </div>
        </Link>
    );
}

export default NavbarLink