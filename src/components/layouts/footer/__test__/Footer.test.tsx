import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { FooterLink, FooterSectionProps } from '../type';

// Mock child components to simplify testing
jest.mock('../FooterSection', () => {
  const MockedFooterSection = (props: FooterSectionProps) => (
    <div data-testid={`footer-section-${props.title.toLowerCase()}`}>
      <h3>{props.title}</h3>
      <ul>
        {props.links.map((link: FooterLink) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  MockedFooterSection.displayName = 'MockedFooterSection';
  return MockedFooterSection;
});

jest.mock('../FooterCopyright', () =>  
  {
    const MockedFooterCopyright = () => <div data-testid="footer-copyright">{new Date().getFullYear()} Copyright</div>;

    MockedFooterCopyright.displayName = 'MockedFooterCopyright';
    return MockedFooterCopyright;
  }
);

jest.mock('../NewsletterForm', () => { 
  const MokedNewsletterForm = () => <div data-testid="newsletter-form">Newsletter</div>;

  MokedNewsletterForm.displayName = 'MokedNewsletterForm';
  return MokedNewsletterForm;
});

jest.mock('../SocialIcons', () => {
  const SocialIcons = () => <div data-testid="social-icons">Social Icons</div>;

  SocialIcons.displayName = 'SocialIcons';
  return SocialIcons;
});

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer with proper semantic HTML', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('bg-gray-900');
  });

  it('displays brand information correctly', () => {
    const logo = screen.getByText('Mood Money');
    const tagline = screen.getByText(
      /Making finance management calm, comfy, and emotionally intelligent/i
    );
    
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('text-2xl');
    expect(tagline).toBeInTheDocument();
  });

  it('renders all section headers', () => {
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Stay Connected')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    const featuresLinks = [
      'Expense Tracking',
      'Income Management',
      'Budget Planning',
      'Mood Insights'
    ];
    
    const companyLinks = [
      'About Us',
      'Careers',
      'Blog',
      'Contact'
    ];
    
    featuresLinks.forEach(text => {
      expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
    });
    
    companyLinks.forEach(text => {
      expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
    });
  });

  it('renders child components correctly', () => {
    expect(screen.getByTestId('footer-section-features')).toBeInTheDocument();
    expect(screen.getByTestId('footer-section-company')).toBeInTheDocument();
    expect(screen.getByTestId('footer-copyright')).toBeInTheDocument();
    expect(screen.getByTestId('newsletter-form')).toBeInTheDocument();
    expect(screen.getByTestId('social-icons')).toBeInTheDocument();
  });

  it('displays current year in copyright', () => {
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByTestId('footer-copyright');
    expect(copyright).toHaveTextContent(currentYear.toString());
  });
});