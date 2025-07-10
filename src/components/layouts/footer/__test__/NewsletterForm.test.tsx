import {render, screen} from '@testing-library/react';
import NewsletterForm from '../NewsletterForm';

jest.mock('lucide-react', () => ({
    Send: () => <div>Send</div>,
}));

describe('NewsletterForm Component', () => {
    test('renders correctly', () => {
        render(<NewsletterForm />);
        
        expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
    });

    test('class render properly', () => {
        render(<NewsletterForm />);
        
        expect(screen.getByText(/Subscribe to our newsletter/)).toHaveClass('text-gray-400');
        expect(screen.getByPlaceholderText("Your email")).toHaveClass('px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary');
        expect(screen.getByRole("button", { name: "Subscribe" })).toHaveClass('bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors');
    });

    test('displays correct icon', () => {
        render(<NewsletterForm />);
        
        expect(screen.getByText(/Send/)).toBeInTheDocument();
    });
});