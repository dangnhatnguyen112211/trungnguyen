'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images?: string[];
  autoPlay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  interval?: number;
}

const ImageSlider = ({
  images = [],
  autoPlay = true,
  showDots = true,
  showArrows = true,
  interval = 5000,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImages = images;

  useEffect(() => {
    if (!autoPlay || displayImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, displayImages.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (displayImages.length === 0) {
    return (
      <div className="flex h-96 w-full items-center justify-center rounded-lg bg-gray-200">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg">
      {/* Slides container */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayImages.map((src, index) => (
          <div key={index} className="relative h-96 w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Overlay text */}
            {/* <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">Slide {index + 1}</h3>
              <p className="text-sm opacity-90">Beautiful image</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && displayImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {showDots && displayImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'scale-125 bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {displayImages.length > 1 && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {currentIndex + 1} / {displayImages.length}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
