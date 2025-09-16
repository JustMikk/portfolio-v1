"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Nejmia Mohamed",
    role: "Owner, Addis Path Trailers",
    company: "Addis Path Trailers",
    image: "/woman.png?height=80&width=80&text=JA",
    rating: 5,
    content:
      "Mikiyas's creative approach and technical expertise transformed our digital presence completely. The results exceeded our expectations and drove significant business growth.",
  },
  {
    id: 2,
    name: "Zikra Ahmed",
    role: "",
    company: "Creative Agency",
    image: "/woman.png?height=80&width=80&text=ST",
    rating: 5,
    content:
      "Working with Mikiyas was an absolute pleasure. His attention to detail and innovative design solutions helped us achieve our vision perfectly.",
  },
  {
    id: 3,
    name: "Henok Assefa",
    role: "CTO, Scales technology solutions",
    company: "Scales technology solutions",
    image: "/placeholder.svg?height=80&width=80&text=ER",
    rating: 5,
    content:
      "The level of professionalism and creativity Mikiyas brings to every project is outstanding. Our user engagement increased by 300% after the redesign.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Happy & Satisfied Faces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working
            with us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-purple-400" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-8 right-8 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={prevTestimonial}
                className="w-10 h-10 p-0 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={nextTestimonial}
                className="w-10 h-10 p-0 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="mt-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-purple-400 text-purple-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-500/10 flex items-center justify-center">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-purple-400 text-sm">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-500 w-8"
                      : "bg-purple-500/30 hover:bg-purple-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
