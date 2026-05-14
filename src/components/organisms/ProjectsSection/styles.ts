import styled from 'styled-components'

export const ProjectsSection = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[20]} 0;
`

export const ProjectsSectionLeft = styled.div`
  display: flex;
  width: 30%;
  min-width: 0;
`

export const ProjectsSectionRight = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
`
