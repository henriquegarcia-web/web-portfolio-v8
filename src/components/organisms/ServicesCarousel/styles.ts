import styled from 'styled-components'

export const ServicesCarousel = styled.div`
  position: relative;
  display: flex;
  align-items: left;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`

const CarouselControl = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease;

  border-radius: ${({ theme }) => theme.radii.round};

  svg {
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  }

  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.border.strong};
  }
`

export const CarouselControlPrev = styled(CarouselControl)`
  right: 100%;
  margin-right: ${({ theme }) => theme.spacing[2]};
  padding-right: 1px;
`

export const CarouselControlNext = styled(CarouselControl)`
  left: 100%;
  margin-left: ${({ theme }) => theme.spacing[2]};
  padding-left: 1px;
`
