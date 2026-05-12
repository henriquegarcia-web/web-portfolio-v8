// ================== IMPORTS

import * as S from './styles'

// ================== COMPONENT TYPES

interface IFigure {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

// ================== COMPONENT

const Figure = ({ src, alt, width, height, caption }: IFigure) => {
  return (
    <S.Figure>
      <S.FigureImage
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <S.FigureCaption>{caption}</S.FigureCaption>
    </S.Figure>
  )
}

export default Figure
