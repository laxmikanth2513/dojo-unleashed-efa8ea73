import { motion } from "framer-motion";
import { ShieldCheck, Award, UserCheck, Zap, Dumbbell, Smile } from "lucide-react";

const achievements = [
  { icon: Award, year: "01", title: "Certified & Experienced Coaches", desc: "Trained by qualified professionals with years of competitive experience." },
  { icon: ShieldCheck, year: "02", title: "Professional Training Environment", desc: "A disciplined, structured space built for serious martial arts growth." },
  { icon: UserCheck, year: "03", title: "Personal Attention For Every Student", desc: "Focused coaching that helps every student progress at their own pace." },
  { icon: Zap, year: "04", title: "Modern Martial Arts Techniques", desc: "Up-to-date training methods combining tradition with modern combat science." },
  { icon: Dumbbell, year: "05", title: "Fitness + Self-Defense Combined", desc: "Build strength, stamina, and real-world self-defense skills together." },
  { icon: Smile, year: "06", title: "Friendly & Motivating Atmosphere", desc: "A supportive community that pushes you to become your strongest self." },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">The MNS Advantage</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Why <span className="text-primary">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover-glow hover-scale"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-primary text-sm font-heading font-bold">{item.year}</span>
                <h3 className="font-heading text-lg font-bold uppercase">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
