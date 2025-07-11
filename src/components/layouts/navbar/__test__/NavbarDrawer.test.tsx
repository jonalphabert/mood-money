// components/__tests__/NavbarDrawer.test.tsx
import React from 'react';
import { render, screen} from '@testing-library/react';
import NavbarDrawer from '../NavbarDrawer';
import { Sheet } from '@/components/ui/sheet';

describe('NavbarDrawer', () => {
  // Test 1: Renders closed state correctly
  it('renders trigger button without opening drawer', () => {
    render(
      <Sheet>
        <NavbarDrawer />
      </Sheet>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByTestId('drawer-content')).not.toBeInTheDocument();
  });
});