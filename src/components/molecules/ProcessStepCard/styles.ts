import styled from 'styled-components'

interface IProcessColor {
  $color: string
}

interface IProcessGradient {
  $color: string
  $gradient: string
}

export const ProcessStepCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`

export const ProcessStepIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

  background-image: ${({ $gradient }) => $gradient};
  /* box-shadow: 0 0 5px 0 ${({ $color }) => $color}; */
`

export const ProcessStepDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding-right: ${({ theme }) => theme.spacing[10]};
`
