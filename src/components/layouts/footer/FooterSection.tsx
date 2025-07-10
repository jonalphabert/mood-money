import Link from 'next/link';

const FooterSection = ({ title, links }: FooterSectionProps) => (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link: FooterLink) => (
          <li key={link.href}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  export default FooterSection;