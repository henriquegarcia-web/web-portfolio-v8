import { useCallback, useEffect, useMemo, useState } from 'react'

interface IUseCarousel<T> {
  items: T[]
  itemsPerView?: number
  loop?: boolean
}

interface IResponsiveItemsPerView {
  default: number
  lg?: number
  md?: number
  sm?: number
}

const responsiveQueries = [
  ['sm', '(max-width: 40rem)'],
  ['md', '(max-width: 48rem)'],
  ['lg', '(max-width: 64rem)'],
] as const

export const useResponsiveItemsPerView = ({
  default: defaultItemsPerView,
  lg,
  md,
  sm,
}: IResponsiveItemsPerView) => {
  const getItemsPerView = useCallback(() => {
    if (typeof window === 'undefined') return defaultItemsPerView

    if (sm && window.matchMedia('(max-width: 40rem)').matches) return sm
    if (md && window.matchMedia('(max-width: 48rem)').matches) return md
    if (lg && window.matchMedia('(max-width: 64rem)').matches) return lg

    return defaultItemsPerView
  }, [defaultItemsPerView, lg, md, sm])

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView)

  useEffect(() => {
    const mediaQueries = responsiveQueries
      .filter(([key]) => ({ lg, md, sm })[key])
      .map(([, query]) => window.matchMedia(query))

    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView())
    }

    updateItemsPerView()

    mediaQueries.forEach((mediaQuery) => {
      mediaQuery.addEventListener('change', updateItemsPerView)
    })

    return () => {
      mediaQueries.forEach((mediaQuery) => {
        mediaQuery.removeEventListener('change', updateItemsPerView)
      })
    }
  }, [getItemsPerView, lg, md, sm])

  return itemsPerView
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
    setEnableTransition(false)
    setCurrentIndex(loop ? itemsPerView : 0)
  }, [itemsPerView, loop])

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
