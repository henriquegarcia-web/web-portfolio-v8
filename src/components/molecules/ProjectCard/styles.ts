import styled from 'styled-components'

interface IProjectImageTrack {
  $currentImageIndex: number
}

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.sm};

  background-color: ${({ theme }) => theme.colors.background.subtle};
  border: 1px solid ${({ theme }) => theme.colors.border.strong};
`

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
`

export const ProjectImageTrack = styled.div<IProjectImageTrack>`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateX(
    ${({ $currentImageIndex }) => `-${$currentImageIndex * 100}%`}
  );

  transition: transform 0.6s ease;
`

export const ProjectImageItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.sm};
  }
`

export const ProjectTag = styled.div`
  position: absolute;
  top: 100%;
  left: ${({ theme }) => theme.spacing[4]};
  transform: translateY(-50%);
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[5]}
      ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }
`

export const ProjectTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: auto;
`
