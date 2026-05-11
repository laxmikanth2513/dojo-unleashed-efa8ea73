import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    name: "ARJUN REDDY",
    text: "MNS Success Martial Arts Academy completely changed my confidence and fitness level. The coaches are disciplined, motivating, and highly skilled.",
    role: "Kickboxing Student, 2 Years",
  },
  {
    name: "PRIYA SHARMA",
    text: "My daughter became more focused, confident, and active after joining this academy. The training environment is extremely positive.",
    role: "Parent",
  },
  {
    name: "ROHIT VERMA",
    text: "The MMA coaching here is on another level. Proper technique, fitness training, and real discipline are taught.",
    role: "MMA Student",
  },
  {
    name: "KAVYA NAIR",
    text: "One of the best martial arts academies in the city. The trainers genuinely care about every student's growth.",
    role: "Karate Student",
  },
  {
    name: "VIKRAM SINGH",
    text: "I improved my stamina, confidence, and self-defense skills within a few months. Highly recommended academy.",
    role: "Fitness & MMA Student",
  },
  {
    name: "ANANYA PATEL",
    text: "The atmosphere is energetic and professional. Perfect place for kids and adults to learn martial arts.",
    role: "Taekwondo Student",
  },
];

const TestimonialsSection = () => {
  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = testimonials.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [perView, maxIndex, index]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) setIndex((i) => (i <= 0 ? maxIndex : i - 1));
    else if (dx < -50) next();
    touchStartX.current = null;
  };

  const dotsCount = maxIndex + 1;

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">
            Voices Of The Dojo
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            What Our <span className="text-primary">Students Say</span>
          </h2>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${(index * 100) / perView}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-3 sm:px-4"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="h-full bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic flex-1">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-heading font-bold uppercase">{t.name}</p>
                    <p className="text-primary text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
