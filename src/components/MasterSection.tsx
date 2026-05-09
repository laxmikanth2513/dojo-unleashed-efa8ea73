import { motion } from "framer-motion";
import masterPhoto from "@/assets/master-photo.png";

const MasterSection = () => {
  return (
    <section id="master" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-secondary to-background p-4 sm:p-8">
              <img
                src={masterPhoto}
                alt="Master Instructor"
                className="w-full max-w-sm mx-auto object-contain"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg" />
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
    </section>
  );
};

export default MasterSection;
