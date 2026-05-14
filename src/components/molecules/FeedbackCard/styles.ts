import styled from 'styled-components'

export const FeedbackCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};

  background-color: ${({ theme }) => theme.colors.background.subtle};
  border: 1px solid ${({ theme }) => theme.colors.border.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`

export const FeedbackCardIcon = styled.div`
  color: ${({ theme }) => theme.colors.brand.accent};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
`

export const FeedbackDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`

export const FeedbackProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.round};
  overflow: hidden;
`

export const FeedbackDetails = styled.div``
