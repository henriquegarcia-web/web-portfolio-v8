import styled from 'styled-components'

interface IImageSizes {
  $width: number
  $height: number
}

export const Image = styled.img<IImageSizes>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`
