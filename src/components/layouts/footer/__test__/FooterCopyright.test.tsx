// tests/components/FooterCopyright.test.tsx
import { render, screen } from '@testing-library/react';
import FooterCopyright from '../FooterCopyright';

describe('FooterCopyright Component', () => {
  // Mock Date to ensure consistent test results
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('renders copyright with current year', () => {
    render(<FooterCopyright />);
    
    // Check current year is rendered
    expect(screen.getByText(/2023/)).toBeInTheDocument();
    expect(screen.getByText(/© 2023 Mood Money/)).toBeInTheDocument();
  });

  test('contains all static text content', () => {
    render(<FooterCopyright />);
    
    expect(screen.getByText(/All rights reserved./)).toBeInTheDocument();
    expect(screen.getByText(/Designed with ❤️ and 😊/)).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    const { container } = render(<FooterCopyright />);
    
    // Get the first div in the rendered output
    const copyrightDiv = container.querySelector('div');
    
    // Verify it exists and has the expected classes
    expect(copyrightDiv).not.toBeNull();
    expect(copyrightDiv).toHaveClass('mt-12');
    expect(copyrightDiv).toHaveClass('pt-8');
    expect(copyrightDiv).toHaveClass('border-gray-800');
    expect(copyrightDiv).toHaveClass('text-center');
    expect(copyrightDiv).toHaveClass('text-gray-400');
  });

  test('updates year when time changes', () => {
    // Change to 2024
    jest.setSystemTime(new Date('2024-02-15'));
    render(<FooterCopyright />);
    
    expect(screen.getByText(/© 2024 Mood Money/)).toBeInTheDocument();
    expect(screen.queryByText(/2023/)).not.toBeInTheDocument();
  });
});