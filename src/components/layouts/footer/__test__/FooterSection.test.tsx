import { render, screen } from '@testing-library/react';
import FooterSection from '../FooterSection';

describe('FooterSection Component', () => {
    test('renders correctly', () => {
        render(<FooterSection title="Test Section" links={[{ href: '#', label: 'Link 1' }, { href: '#', label: 'Link 2' }]} />);
        
        expect(screen.getByText('Test Section')).toBeInTheDocument();
        expect(screen.getByText('Link 1')).toBeInTheDocument();
        expect(screen.getByText('Link 2')).toBeInTheDocument();
    });

    test('displays links correctly', () => {
        render(<FooterSection title="Test Section" links={[{ href: '#', label: 'Link 1' }, { href: '#', label: 'Link 2' }]} />);
        
        expect(screen.getByText('Link 1')).toHaveAttribute('href', '#');
        expect(screen.getByText('Link 2')).toHaveAttribute('href', '#');
    });

    test('displays title correctly', () => {
        render(<FooterSection title="Test Section" links={[{ href: '#', label: 'Link 1' }, { href: '#', label: 'Link 2' }]} />);
        
        expect(screen.getByText('Test Section')).toBeInTheDocument();
    });

    test('displays links with class correctly', () => {
        render(<FooterSection title="Test Section" links={[{ href: '#', label: 'Link 1' }, { href: '#', label: 'Link 2' }]} />);
        
        expect(screen.getByText('Link 1')).toHaveClass('text-gray-400 hover:text-white transition-colors');
        expect(screen.getByText('Link 2')).toHaveClass('text-gray-400 hover:text-white transition-colors');
    });

    test('displays title with class correctly', () => {
        render(<FooterSection title="Test Section" links={[{ href: '#', label: 'Link 1' }, { href: '#', label: 'Link 2' }]} />);
        
        expect(screen.getByText('Test Section')).toHaveClass('text-lg font-bold');
    });
});

