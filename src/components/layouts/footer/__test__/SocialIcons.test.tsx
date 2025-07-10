import {screen , render} from '@testing-library/react';
import SocialIcons from '../SocialIcons';

describe('SocialIcons Component', () => {
    test('renders exact number of social icons', () => {
        render(<SocialIcons />);
        
        expect(screen.getAllByRole('link')).toHaveLength(4);
    });

    test('class render properly', () => {
        const {container} = render(<SocialIcons />);

        const socialIconFlex = container.querySelector('div');
        const socialIconLink = container.querySelector('a');

        expect(socialIconFlex).toHaveClass('mt-4 flex space-x-4');
        expect(socialIconLink).toHaveClass('text-gray-400 hover:text-white transition-colors');
    });

    test('should have correct links', () => {
        render(<SocialIcons />);
        
        expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', 'https://www.twitter.com');
        expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', 'https://www.facebook.com');
        expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com');
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com');
    });

    test('should have correct labels', () => {
        render(<SocialIcons />);
        
        expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('aria-label', 'Twitter');
        expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('aria-label', 'Facebook');
        expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('aria-label', 'Instagram');
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('aria-label', 'LinkedIn');
    });
});