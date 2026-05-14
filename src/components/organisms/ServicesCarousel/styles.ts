import styled from 'styled-components'

interface ICarouselTrack {
  $translateX: number
  $dragOffset: number
  $enableTransition: boolean
  $isDragging: boolean
}

interface ICarouselItem {
  $itemWidth: number
}

export const ServicesCarousel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: ${({ theme }) => theme.spacing[10]};
  }
`

export const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;
`

export const CarouselTrack = styled.div<ICarouselTrack>`
  display: flex;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  transform: translateX(
    calc(${({ $translateX }) => $translateX}% + ${({ $dragOffset }) => $dragOffset}px)
  );
  transition: ${({ $enableTransition, $isDragging }) =>
    $enableTransition && !$isDragging ? 'transform 0.45s ease' : 'none'};
  user-select: none;
  will-change: transform;
`

export const CarouselItem = styled.div<ICarouselItem>`
  flex: 0 0 ${({ $itemWidth }) => $itemWidth}%;
  min-width: 0;
  padding-inline: ${({ theme }) => theme.spacing[1]};

  > article {
    width: 100%;
    height: 100%;
  }
`

const CarouselControl = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  cursor: pointer;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.round};

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;

  transform: translateY(-50%);
  transition: 0.2s ease;

  svg {
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.strong};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: calc(100% + ${({ theme }) => theme.spacing[6]});
  }
`

export const CarouselControlPrev = styled(CarouselControl)`
  right: 100%;
  margin-right: ${({ theme }) => theme.spacing[2]};
  padding-right: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: calc(50% + ${({ theme }) => theme.spacing[1]});
    margin-right: 0;
  }
`

export const CarouselControlNext = styled(CarouselControl)`
  left: 100%;
  margin-left: ${({ theme }) => theme.spacing[2]};
  padding-left: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: calc(50% + ${({ theme }) => theme.spacing[1]});
    margin-left: 0;
  }
`
