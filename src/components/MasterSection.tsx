import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import masterPhoto from "@/assets/master-photo.png";

const Counter = ({ to = 14, suffix = "+" }: { to?: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0{suffix}</span>;
};

const MasterSection = () => {
  return (
    <section id="master" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Premium Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-primary uppercase tracking-[0.4em] text-xs sm:text-sm mb-3 text-center"
              style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.6)" }}
            >
              Master &amp; Founder
            </motion.p>

            {/* Name */}
            <motion.h3
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-center text-foreground mb-2"
              style={{ textShadow: "0 0 20px hsl(0 0% 100% / 0.25), 0 0 40px hsl(var(--primary) / 0.2)" }}
            >
              Narshimha Yadav
            </motion.h3>

            {/* Experience subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-primary text-xs sm:text-sm uppercase tracking-[0.3em] text-center mb-6 font-medium"
            >
              14+ Years of Experience
            </motion.p>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-lg bg-gradient-to-b from-secondary to-background p-4 sm:p-8"
            >
              <img
                src={masterPhoto}
                alt="Master Narshimha Yadav - Founder of MNS Success Martial Arts Academy"
                className="w-full max-w-sm mx-auto object-contain"
                loading="lazy"
                width={800}
                height={1024}
              />
            </motion.div>

            {/* Premium Experience Card (replaces simple outline box) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-2 border-primary flex flex-col items-center justify-center backdrop-blur-md bg-background/40 shadow-[0_0_30px_hsl(var(--primary)/0.4)] animate-pulse-slow"
              style={{
                animation: "pulseGlow 3s ease-in-out infinite",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              <span className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-none" style={{ textShadow: "0 0 15px hsl(var(--primary) / 0.7)" }}>
                <Counter to={14} suffix="+" />
              </span>
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/90 mt-1">
                Years
              </span>
              <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">
              About The Academy
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">
              Building <span className="text-primary">Champions</span> Inside &amp; Outside The Ring
            </h2>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At MNS Success Martial Arts Academy, martial arts is not just about combat — it's about creating discipline, confidence, mental toughness, and leadership.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our structured training programs help students improve physically and mentally while learning real self-defense skills, focus, respect, and self-control. Whether you're a beginner or an experienced fighter, our academy helps you unlock your full potential in a safe, motivating, and professional environment.
            </p>
            <div className="space-y-3">
              {["Discipline & Confidence", "Real Self-Defense Skills", "Focus, Respect & Self-Control", "Safe, Professional Environment"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px hsl(var(--primary) / 0.35), 0 0 40px hsl(var(--primary) / 0.15); }
          50% { box-shadow: 0 0 35px hsl(var(--primary) / 0.65), 0 0 70px hsl(var(--primary) / 0.3); }
        }
      `}</style>
    </section>
  );
};

export default MasterSection;
