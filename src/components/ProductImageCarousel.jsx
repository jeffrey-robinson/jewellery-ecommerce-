import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

export default function ProductImageCarousel({ images, alt, className = '', activeImageIndex = null, onChangeIndex = null }) {
  // Normalize images array to ensure it's a valid array of non-empty strings
  const imgList = Array.isArray(images) 
    ? images.filter(img => img && img.trim() !== '')
    : []

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  // Reset to first image if the images list changes
  useEffect(() => {
    setCurrentIndex(0)
    setImageErrors({})
  }, [images])

  // Sync with external activeImageIndex if provided
  useEffect(() => {
    if (activeImageIndex !== null && activeImageIndex >= 0 && activeImageIndex < imgList.length) {
      setCurrentIndex(activeImageIndex)
    }
  }, [activeImageIndex, imgList.length])

  // Determine if a slot has a valid, non-empty URL and has not errored
  const isImageValid = (index) => {
    const url = imgList[index]
    return url && url.trim() !== '' && !imageErrors[index]
  }

  const showCarouselControls = imgList.length > 1

  const changeIndex = (index) => {
    setCurrentIndex(index)
    if (onChangeIndex) {
      onChangeIndex(index)
    }
  }

  // Navigate handlers
  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (showCarouselControls) {
      const nextIndex = (currentIndex - 1 + imgList.length) % imgList.length
      changeIndex(nextIndex)
    }
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (showCarouselControls) {
      const nextIndex = (currentIndex + 1) % imgList.length
      changeIndex(nextIndex)
    }
  }

  const handleDotClick = (e, index) => {
    e.preventDefault()
    e.stopPropagation()
    if (showCarouselControls) {
      changeIndex(index)
    }
  }

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
    // If the active image errors out, revert to another one if valid
    const nextValidIndex = imgList.findIndex((_, idx) => idx !== index && !imageErrors[idx])
    if (nextValidIndex !== -1) {
      changeIndex(nextValidIndex)
    }
  }

  // Touch Swipe Handlers for Mobile Support
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && showCarouselControls) {
      const nextIndex = (currentIndex + 1) % imgList.length
      changeIndex(nextIndex)
    }
    if (isRightSwipe && showCarouselControls) {
      const nextIndex = (currentIndex - 1 + imgList.length) % imgList.length
      changeIndex(nextIndex)
    }
  }

  const activeIndex = showCarouselControls ? currentIndex : (imgList.length > 0 ? 0 : null)
  const currentImageUrl = activeIndex !== null ? imgList[activeIndex] : null

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-full group/carousel overflow-hidden ${className}`}
    >
      {currentImageUrl ? (
        <img
          src={currentImageUrl}
          alt={alt}
          onError={() => handleImageError(activeIndex)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-[1.03]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4">
          <ImageOff size={28} className="mb-2 text-gold/65 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">Image coming soon</span>
        </div>
      )}

      {/* Overlaid Navigation Arrows */}
      {showCarouselControls && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white/75 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-[#211522]/75 hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm active:scale-90 opacity-100 duration-300"
          >
            <ChevronLeft size={15} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white/75 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-[#211522]/75 hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm active:scale-90 opacity-100 duration-300"
          >
            <ChevronRight size={15} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* dot indicators */}
      {showCarouselControls && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 py-1 px-2 rounded-full bg-black/15 backdrop-blur-[2px]">
          {imgList.map((_, i) => (
            <button
              key={i}
              onClick={(e) => handleDotClick(e, i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i 
                  ? 'bg-gold w-3 scale-110' 
                  : 'bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
