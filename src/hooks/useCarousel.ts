import { useCallback, useEffect, useMemo, useState } from 'react'

interface IUseCarousel<T> {
  items: T[]
  itemsPerView?: number
  loop?: boolean
}

export const useCarousel = <T>({
  items,
  itemsPerView = 3,
  loop = true,
}: IUseCarousel<T>) => {
  const [currentIndex, setCurrentIndex] = useState(itemsPerView)
  const [enableTransition, setEnableTransition] = useState(true)

  const carouselItems = useMemo(() => {
    if (!loop || items.length === 0) return items

    const startClones = items.slice(-itemsPerView)
    const endClones = items.slice(0, itemsPerView)

    return [...startClones, ...items, ...endClones]
  }, [items, itemsPerView, loop])

  const itemWidth = 100 / itemsPerView

  const translateX = -(currentIndex * itemWidth)

  const next = useCallback(() => {
    setEnableTransition(true)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const prev = useCallback(() => {
    setEnableTransition(true)
    setCurrentIndex((prev) => prev - 1)
  }, [])

  const handleTransitionEnd = useCallback(() => {
    if (!loop) return

    if (currentIndex >= items.length + itemsPerView) {
      setEnableTransition(false)
      setCurrentIndex(itemsPerView)
    }

    if (currentIndex <= 0) {
      setEnableTransition(false)
      setCurrentIndex(items.length)
    }
  }, [currentIndex, items.length, itemsPerView, loop])

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true)
        })
      })
    }
  }, [enableTransition])

  return {
    carouselItems,
    currentIndex,
    itemWidth,
    translateX,
    enableTransition,
    next,
    prev,
    handleTransitionEnd,
  }
}
