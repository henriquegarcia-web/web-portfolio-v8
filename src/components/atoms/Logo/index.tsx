// ================== IMPORTS

import { Image } from '@/components/atoms'

import type { SizeTypes } from '@/types/styles'

// ================== UTILS

const sizeVariants = {
  sm: {
    width: 30,
    height: 30,
  },

  md: {
    width: 50,
    height: 50,
  },

  lg: {
    width: 90,
    height: 90,
  },
} satisfies Record<
  SizeTypes,
  {
    width: number
    height: number
  }
>

// ================== COMPONENT TYPES

interface ILogo {
  size?: SizeTypes
}

// ================== COMPONENT

const Logo = ({ size = 'md' }: ILogo) => {
  const imageSize = sizeVariants[size]

  return (
    <Image
      src="/logo_minified.png"
      alt="Logo de Henrique Garcia"
      width={imageSize.width}
      height={imageSize.height}
      loading="eager"
      fetchPriority="high"
    />
  )
}

export default Logo
