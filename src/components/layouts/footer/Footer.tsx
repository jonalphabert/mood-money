import Link from 'next/link';
import FooterSection from './FooterSection';
import FooterCopyright from './FooterCopyright';
import NewsletterForm from './NewsletterForm';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center">
              <div className="bg-primary p-2 rounded-lg">
                <i className="fas fa-smile text-white text-2xl"></i>
              </div>
              <span className="ml-3 text-2xl font-bold">Mood Money</span>
            </div>
            <p className="mt-4 text-gray-400">
              Making finance management calm, comfy, and emotionally intelligent.
            </p>
          </div>
          
          {/* Features Links */}
          <FooterSection 
            title="Features" 
            links={[
              { href: "/features/expense-tracking", label: "Expense Tracking" },
              { href: "/features/income-management", label: "Income Management" },
              { href: "/features/budget-planning", label: "Budget Planning" },
              { href: "/features/mood-insights", label: "Mood Insights" }
            ]}
          />
          
          {/* Company Links */}
          <FooterSection 
            title="Company" 
            links={[
              { href: "/about", label: "About Us" },
              { href: "/careers", label: "Careers" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" }
            ]}
          />
          
          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <SocialIcons />
            <NewsletterForm />
          </div>
        </div>
        
        {/* Copyright */}
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;