"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1600",
    title: "The Art of Thought",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1600",
    title: "Fragments of History",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600",
    title: "Beyond the Canvas",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1600",
    title: "The Human Condition",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1600",
    title: "Echoes of Time",
  },
];

export default function HomepageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl ">
        <div className="relative">
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                  <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={slide.id === 1}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={20} strokeWidth={1.7} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={20} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </section>
  );
}
