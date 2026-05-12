import { useAppTranslation } from '@/hooks/useAppTranslation';
import { Container, PageTitle, PageWrapper } from './HomePage.styles';

export function HomePage() {
  const { t } = useAppTranslation();

  return (
    <PageWrapper>
      <Container>
        <PageTitle>{t('home.testMessage')}</PageTitle>
      </Container>
    </PageWrapper>
  );
}
