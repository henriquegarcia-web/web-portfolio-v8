import styled from 'styled-components';

export const PageWrapper = styled.main`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at top, rgba(37, 99, 235, 0.12), transparent 35%),
    ${({ theme }) => theme.colors.background.canvas};
`;

export const Container = styled.div`
  width: min(100% - ${({ theme }) => theme.spacing['10']}, ${({ theme }) => theme.sizes.container.lg});
  margin-inline: auto;
  padding-block: ${({ theme }) => theme.spacing['12']};
`;

export const PageTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.families.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacings.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  }
`;
