import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { PointerEvent } from 'react'

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
  const hasMounted = useRef(false)
  const [currentIndex, setCurrentIndex] = useState(() =>
    loop ? itemsPerView : 0,
  )
  const [enableTransition, setEnableTransition] = useState(true)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

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

  const resetDrag = useCallback(() => {
    setDragStartX(null)
    setDragOffset(0)
    setIsDragging(false)
  }, [])

  const handlePointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return

    event.currentTarget.setPointerCapture(event.pointerId)
    setEnableTransition(false)
    setDragStartX(event.clientX)
    setDragOffset(0)
    setIsDragging(true)
  }, [])

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (dragStartX === null) return

      setDragOffset(event.clientX - dragStartX)
    },
    [dragStartX],
  )

  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (dragStartX === null) return

      const dragDistance = event.clientX - dragStartX
      const dragThreshold = Math.min(
        80,
        Math.max(32, event.currentTarget.clientWidth * 0.08),
      )

      resetDrag()

      if (Math.abs(dragDistance) < dragThreshold) {
        setEnableTransition(true)
        return
      }

      if (dragDistance < 0) {
        next()
        return
      }

      prev()
    },
    [dragStartX, next, prev, resetDrag],
  )

  const handlePointerCancel = useCallback(() => {
    resetDrag()
    setEnableTransition(true)
  }, [resetDrag])

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
    if (!hasMounted.current) {
      hasMounted.current = true
      return
    }

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
    dragOffset,
    enableTransition,
    isDragging,
    next,
    prev,
    handleTransitionEnd,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerEnd,
      onPointerCancel: handlePointerCancel,
      onPointerLeave: handlePointerEnd,
    },
  }
}
