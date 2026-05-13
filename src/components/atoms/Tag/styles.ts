import styled from 'styled-components'
import type { TagVariantTypes } from '@/types/styles'

export interface ITag {
  $variant: TagVariantTypes
}

export const Tag = styled.span<ITag>``
