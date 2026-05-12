// ================== IMPORTS

import * as S from './styles'

// ================== COMPONENT TYPES

interface IImage {
  src: string
  alt: string
  width: number
  height: number
}

// ================== COMPONENT

const Image = ({ src, alt, width, height }: IImage) => {
  return <S.Image src={src} alt={alt} width={width} height={height} />
}

export default Image
