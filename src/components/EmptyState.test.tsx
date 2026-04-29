import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from '../components/EmptyState';

describe('EmptyState', () => {
  it('renders default message and icon', () => {
    render(<EmptyState />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Henüz bir alışkanlık eklenmemiş.')).toBeInTheDocument();
  });

  it('renders custom message', () => {
    render(<EmptyState message="Filtreye uygun alışkanlık yok." />);
    expect(screen.getByText('Filtreye uygun alışkanlık yok.')).toBeInTheDocument();
  });

  it('renders custom icon when provided', () => {
    render(<EmptyState icon={<span data-testid="custom-icon">🔍</span>} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('has aria-live polite for accessibility', () => {
    render(<EmptyState />);
    const container = screen.getByRole('status');
    expect(container).toHaveAttribute('aria-live', 'polite');
  });
});
