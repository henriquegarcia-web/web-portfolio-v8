import { axe } from 'vitest-axe';
import { HomePage } from '@/pages/home/HomePage';
import { renderWithProviders } from './test-utils';

describe('HomePage', () => {
  it('renders the main route test content', () => {
    const { getByText } = renderWithProviders(<HomePage />);

    expect(getByText('Texto de teste da rota principal.')).toBeInTheDocument();
  });

  it('has no critical accessibility violations in the initial screen', async () => {
    const { container } = renderWithProviders(<HomePage />);

    const results = await axe(container);

    expect(results.violations).toHaveLength(0);
  });
});
