import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

export default function ProductImageCarousel({ images, alt, className = '', activeImageIndex = null, onChangeIndex = null }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({ 0: false, 1: false })

  // Reset to first image if the images list changes
  useEffect(() => {
    setCurrentIndex(0)
    setImageErrors({ 0: false, 1: false })
  }, [images])

  // Sync with external activeImageIndex if provided
  useEffect(() => {
    if (activeImageIndex !== null && activeImageIndex >= 0 && activeImageIndex < 2) {
      setCurrentIndex(activeImageIndex)
    }
  }, [activeImageIndex])

  // Normalise images array to ensure exactly 2 elements
  const imgList = Array.isArray(images) 
    ? [...images, '', ''].slice(0, 2) 
    : ['', '']

  // Determine if a slot has a valid, non-empty URL and has not errored
  const isImageValid = (index) => {
    const url = imgList[index]
    return url && url.trim() !== '' && !imageErrors[index]
  }

  const hasFirst = isImageValid(0)
  const hasSecond = isImageValid(1)
  const showCarouselControls = hasFirst && hasSecond

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
      changeIndex(0)
    }
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (showCarouselControls) {
      changeIndex(1)
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
    // If the active image errors out, revert to the other one if valid
    if (index === 0 && isImageValid(1)) {
      changeIndex(1)
    } else if (index === 1) {
      changeIndex(0)
    }
  }

  // Determine what to display
  const activeIndex = showCarouselControls ? currentIndex : (hasFirst ? 0 : (hasSecond ? 1 : null))
  const currentImageUrl = activeIndex !== null ? imgList[activeIndex] : null

  return (
    <div className={`relative w-full h-full group/carousel overflow-hidden ${className}`}>
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

      {/* Overlaid Navigation Arrows (using z-30 to clear any overlays) */}
      {showCarouselControls && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white/75 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-ink/75 hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 duration-300"
          >
            <ChevronLeft size={15} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white/75 backdrop-blur-sm border border-slate-200/50 flex items-center justify-center text-ink/75 hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 duration-300"
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
