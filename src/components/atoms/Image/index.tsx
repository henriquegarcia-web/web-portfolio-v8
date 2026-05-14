// ================== IMPORTS

import type { ImgHTMLAttributes } from 'react'

import * as S from './styles'

// ================== COMPONENT TYPES

interface IImage extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height'
> {
  src: string
  alt: string
  width: number
  height: number
}

// ================== COMPONENT

const Image = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: IImage) => {
  return (
    <S.Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  )
}

export default Image
