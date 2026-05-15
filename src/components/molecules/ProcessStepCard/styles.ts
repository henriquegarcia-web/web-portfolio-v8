import styled from 'styled-components'

interface IProcessColor {
  $color: string
}

interface IProcessGradient {
  $color: string
  $nextColor?: string
}

export const ProcessStepCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

export const ProcessStepIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
    min-height: 100%;
    padding-bottom: ${({ theme }) => theme.spacing[4]};
  }
`

export const ProcessStepIcon = styled.div<IProcessColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.sm};

  border: 2px solid ${({ $color }) => $color};
  box-shadow:
    0 0 15px 0 ${({ $color }) => $color},
    inset 0 0 10px 0 ${({ $color }) => $color};

  svg {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
    opacity: 0.9;
  }
`

export const ProcessStepBar = styled.div<IProcessGradient>`
  position: absolute;
  right: 0;
  display: flex;
  width: calc(100% - 50px);
  height: 3px;

  background-image: ${({ $color, $nextColor }) =>
    `linear-gradient(90deg, ${$color}, ${$nextColor ?? 'transparent'})`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: 50px;
    right: auto;
    left: 50%;
    width: 3px;
    height: calc(100% - ${({ theme }) => theme.spacing[6]});
    transform: translateX(-50%);

    background-image: ${({ $color, $nextColor }) =>
      `linear-gradient(180deg, ${$color}, ${$nextColor ?? 'transparent'})`};
  }
`

export const ProcessStepDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding-right: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 0;
  }
`
