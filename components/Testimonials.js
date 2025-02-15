'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Joining Beast Mode transformed my life! The trainers pushed me beyond what I thought possible. Down 30 pounds and feeling stronger than ever!",
      role: "Member since 2021",
      image: "https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg",
      rating: 5,
      achievement: "Lost 30 lbs"
    },
    {
      name: "Mike Chen",
      text: "The expertise and dedication of the trainers here is unmatched. They don't just train you, they educate you about fitness and nutrition.",
      role: "Member since 2020",
      image: "https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_1280.jpg",
      rating: 5,
      achievement: "Gained 15 lbs muscle"
    },
    {
      name: "Emily Davis",
      text: "More than just a gym - it's a community. The support system here is incredible, and the results speak for themselves!",
      role: "Member since 2022",
      image: "https://cdn.pixabay.com/photo/2020/06/21/12/18/race-5324594_1280.jpg",
      rating: 5,
      achievement: "Completed first marathon"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="heading text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        
        <div className="relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-gradient-to-r from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3" />
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-red-500/80 backdrop-blur-sm rounded-full">
                    {testimonials[currentIndex].achievement}
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-6">&quot;{testimonials[currentIndex].text}&quot;</p>
                  <div>
                    <p className="font-bold text-xl">{testimonials[currentIndex].name}</p>
                    <p className="text-red-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
