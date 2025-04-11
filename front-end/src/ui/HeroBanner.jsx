import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeroBanner({ data }) {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1)
  }

  return (
    <>
      <style>
        {`
          @media (min-width: 1500px) and (max-width: 1920px) {
            .hero-image {
              height: 700px !important;
              width: 1100px !important;
            }

            .hero-wrapper {
              max-width: 1100px !important;
            }
          }
        `}
      </style>

      <div className="w-full max-w-5xl top-[80px] mx-auto relative overflow-hidden hero-wrapper">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data?.map((el, i) => (
            <img
              onClick={()=>navigate(`/event/${el?.id}`)}
              key={i}
              src={el?.image_url}
              alt={`Slide ${i}`}
              className="w-full h-[400px] sm:h-[300px] md:h-[600px] object-cover hero-image"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white bg-opacity-50 px-3 py-1 rounded-full z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-white bg-opacity-50 px-3 py-1 rounded-full z-10"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {data?.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
