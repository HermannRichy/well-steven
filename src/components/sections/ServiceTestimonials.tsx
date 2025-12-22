"use client";

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
    title: "« Un service fiable et rassurant »",
    content:
      "J’avais besoin d’un accompagnement clair et structuré, et j’ai été agréablement surpris par la qualité du service. Tout est bien expliqué, fluide et professionnel. Je recommande sans hésiter.",
    author: "Zinsou Rebecca",
    avatar:
      "https://i.pinimg.com/736x/bd/c6/24/bdc6247d1c8ebafd95db73f665adabd4.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "« Très professionnel du début à la fin »",
    content:
      "L’équipe est à l’écoute et répond rapidement. J’ai particulièrement apprécié le sérieux et la transparence dans chaque étape. Une vraie valeur ajoutée.",
    author: "Gbaguidi Bernice",
    avatar:
      "https://i.pinimg.com/1200x/3e/e6/0d/3ee60daf615fed89180c5675aff3fa15.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "« Résultat au-delà de mes attentes »",
    content:
      "Je ne m’attendais pas à un tel niveau de qualité. Le service est bien pensé, moderne et surtout très efficace. Cela m’a fait gagner énormément de temps.",
    author: " Fassinou Jean",
    avatar:
      "https://i.pinimg.com/1200x/5c/8e/e6/5c8ee630400c6d0e1fbfe9bd94133ed0.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "« Un accompagnement humain et sérieux »",
    content:
      "On se sent réellement accompagné, pas juste comme un simple client. Les conseils sont pertinents et adaptés à mes besoins. Une excellente expérience.",
    author: "Quenum Nadia",
    avatar:
      "https://i.pinimg.com/736x/cc/09/1e/cc091e4946690934d8bf4d15cb21c2f5.jpg",
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
        <h2 className="text-4xl font-momo md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
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
    </section>
  );
};

export default Testimonials;
