import styled from 'styled-components'

interface ICarouselTrack {
  $translateX: number
  $enableTransition: boolean
}

interface ICarouselItem {
  $itemWidth: number
}

export const ProjectsCarousel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
`

export const CarouselTrack = styled.div<ICarouselTrack>`
  display: flex;
  transform: translateX(${({ $translateX }) => $translateX}%);
  transition: ${({ $enableTransition }) =>
    $enableTransition ? 'transform 0.45s ease' : 'none'};
`

export const CarouselItem = styled.div<ICarouselItem>`
  flex: 0 0 ${({ $itemWidth }) => $itemWidth}%;
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
`

export const CarouselControlPrev = styled(CarouselControl)`
  right: 100%;
  margin-right: ${({ theme }) => theme.spacing[2]};
`

export const CarouselControlNext = styled(CarouselControl)`
  left: 100%;
  margin-left: ${({ theme }) => theme.spacing[2]};
`
