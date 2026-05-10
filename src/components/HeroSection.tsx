import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "6000+", label: "Students Trained" },
  { value: "3", label: "Locations" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Martial arts training" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4"
          >
            Professional MMA, Kickboxing, Karate &amp; Self-Defense Training
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6"
          >
            Unleash The{" "}
            <span className="text-gradient">Fighter</span>{" "}
            Within
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
          >
            Welcome to MNS Success Martial Arts Academy — where discipline meets power, and ordinary people transform into unstoppable warriors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="px-10 py-6" asChild>
              <a href="#contact">Join Now</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="px-10 py-6" asChild>
              <a href="#contact">Book Free Trial</a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-3xl md:text-5xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
