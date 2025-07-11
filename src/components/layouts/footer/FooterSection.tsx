import Link from 'next/link';
import { FooterLink, FooterSectionProps } from './type';

const FooterSection = ({ title, links }: FooterSectionProps) => (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link: FooterLink, index) => (
          <li key={`${link.href}-${index}`}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  export default FooterSection;