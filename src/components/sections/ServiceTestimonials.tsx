"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialData {
  id: number;
  title: string;
  content: string;
  author: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    title: "« Bon service »",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nibh hac lacinia dolor vitae mauris. Nisl amet aliquam sem scelerisque et tortor.",
    author: "Rebecca Edwards",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 2,
    title: "« Très professionnel »",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nibh hac lacinia dolor vitae mauris. Nisl amet aliquam sem scelerisque et tortor.",
    author: "Lolita Bocharova",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 3,
    title: "« Satisfait du résultat »",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nibh hac lacinia dolor vitae mauris. Nisl amet aliquam sem scelerisque et tortor.",
    author: "Hermann Gorshkov",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 4,
    title: "« Excellent accompagnement »",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nibh hac lacinia dolor vitae mauris. Nisl amet aliquam sem scelerisque et tortor.",
    author: "Jean Dupont",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialData }) => {
  return (
    <div className="bg-[#f3f4f6] rounded-2xl p-6 min-w-[300px] md:min-w-[340px] mx-4 h-[320px] flex flex-col justify-between">
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {testimonial.title}
        </h3>
        <p className="text-slate-500 text-[15px] leading-relaxed font-light">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <div className="flex text-[#ffac4d]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-900 font-semibold text-sm">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block mb-4">
          Commentaires des clients
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Une expérience digne de confiance, un service que vous recommanderez
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative logo */}
      <div className="container mx-auto px-6 relative h-0">
        <div className="absolute right-0 -top-12 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-black text-xl italic">K</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
