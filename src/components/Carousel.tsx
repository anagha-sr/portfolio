import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'
import { useEffect, useState } from 'react'
import AutoPlay from 'embla-carousel-autoplay'


type CarouselProps = {
  children: React.ReactNode[]
  type: "projects" | "certifications"
}

function Carousel({children, type: carouselType}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center',
  breakpoints: {
    '(min-width: 768px)': { align: 'start' }
  } },
[
    AutoPlay({active: carouselType === "certifications", playOnInit:true, stopOnMouseEnter: true })
  ])
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)
   const scrollPrev = () => {
    emblaApi?.plugins().autoplay?.stop()
    return emblaApi?.scrollPrev()
  }
  const scrollNext = () => {
    emblaApi?.plugins().autoplay?.stop()
    return emblaApi?.scrollNext()
  }
  const handleMouseLeave = () => {
    emblaApi?.plugins().autoplay?.play()
  }

  const toggleButtonsDisabled = (emblaApi: any) => {
    setPrevButtonDisabled(!emblaApi.canScrollPrev())
    setNextButtonDisabled(!emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return

    toggleButtonsDisabled(emblaApi)
    emblaApi.on('reInit', toggleButtonsDisabled)
    emblaApi.on('select', toggleButtonsDisabled)
  }, [emblaApi])

  return (
<div className={`carousel-container carousel-${carouselType} relative  px-4`} onMouseLeave={handleMouseLeave}>

    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children.map((child, index) => (
            <div className="embla__slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add navigation controls here */}
              <div className={`absolute left-0 top-0 bottom-0 -translate-x-1/2`} >  <button
        className="embla__prev h-full px-2"
        onClick={scrollPrev}
        onMouseLeave={handleMouseLeave}
        disabled={prevButtonDisabled}

      >
<span className="material-symbols-outlined">
arrow_back_ios
</span>      </button></div>
     
    </div>
    <div className={`absolute right-0 top-0 bottom-0 translate-x-1/2`}> <button
        className="embla__next h-full px-2"
        onClick={scrollNext}
        onMouseLeave={handleMouseLeave}
        disabled={nextButtonDisabled}
      >
<span className="material-symbols-outlined">
arrow_forward_ios
</span>      </button></div>
    </div>
  )
}

export default Carousel
