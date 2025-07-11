import {screen , render} from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
    test('renders correctly', () => {
        render(<Navbar />);
        
        expect(screen.getByText(/Features/)).toBeInTheDocument();
        expect(screen.getByText(/Testimonials/)).toBeInTheDocument();
        expect(screen.getByText(/Pricing/)).toBeInTheDocument();
        expect(screen.getByText(/Login/)).toBeInTheDocument();
        expect(screen.getByText(/Get Started/)).toBeInTheDocument();
    });

    test('displays links with class correctly', () => {
        render(<Navbar />);
        
        expect(screen.getByText(/Features/)).toHaveClass('text-gray-600 hover:text-primary px-4 py-2 font-medium');
        expect(screen.getByText(/Testimonials/)).toHaveClass('text-gray-600 hover:text-primary px-4 py-2 font-medium');
        expect(screen.getByText(/Pricing/)).toHaveClass('text-gray-600 hover:text-primary px-4 py-2 font-medium');
        expect(screen.getByText(/Login/)).toHaveClass('text-primary hover:text-secondary px-4 py-2 font-medium');
        expect(screen.getByText(/Get Started/)).toHaveClass('bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-medium transition duration-300');
    });

    test('displays links with correct text', () => {
        render(<Navbar />);
        
        expect(screen.getByText(/Features/)).toBeInTheDocument();
        expect(screen.getByText(/Testimonials/)).toBeInTheDocument();
        expect(screen.getByText(/Pricing/)).toBeInTheDocument();
        expect(screen.getByText(/Login/)).toBeInTheDocument();
        expect(screen.getByText(/Get Started/)).toBeInTheDocument();
    });

    test('mobile menu have correct class', () => {
        const {container} = render(<Navbar />);

        const mobileMenu = container.getElementsByClassName('md:hidden flex items-center')[0];

        expect(mobileMenu).toHaveClass('md:hidden flex items-center');
    });
});