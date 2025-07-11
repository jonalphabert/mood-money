export interface FooterLink {
    href: string;
    label: string;
}

export interface FooterSectionProps {
    title: string;
    links: FooterLink[];
}