import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 6000, suffix: "+", label: "Students Trained" },
  { value: 2, suffix: "", label: "Locations" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yBg = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), { stiffness: 80, damping: 20 });
  const yContent = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), { stiffness: 80, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background w/ parallax + ken-burns */}
      <motion.div className="absolute inset-0" style={{ y: yBg }}>
        <div className="absolute inset-0 animate-ken-burns">
          <img
            src={heroBg}
            alt="Martial arts training"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        {/* Cinematic red spotlight */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-primary/25 blur-[160px]" />
        {/* Light streak */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/15 to-transparent animate-drift mix-blend-screen" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-16 z-10"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 text-shadow-red"
          >
            Professional MMA, Kickboxing, Karate &amp; Self-Defense Training
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.95] mb-6 tracking-tight text-shadow-red"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif", letterSpacing: "0.01em" }}
          >
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              className="block"
            >
              Unleash The
            </motion.span>
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
              className="block text-gradient-fire"
            >
              Fighter Within
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
          >
            Welcome to MNS Success Martial Arts Academy — where discipline meets power, and ordinary people transform
            into unstoppable warriors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="px-10 py-6 btn-glow group" asChild>
              <a href="#contact">
                Join Now
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="px-10 py-6 btn-glow group" asChild>
              <a href="#contact">
                Book Free Trial
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div
                className="font-heading text-4xl md:text-6xl font-bold text-primary text-shadow-red"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#master"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
