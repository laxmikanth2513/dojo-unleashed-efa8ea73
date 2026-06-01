import { motion } from "framer-motion";
import kidsAdultImg from "@/assets/programs/kids-adult.png";
import kickboxingImg from "@/assets/programs/kickboxing.png";
import karateImg from "@/assets/programs/karate.png";
import mmaImg from "@/assets/programs/mma.png";

const programs = [
  {
    image: kidsAdultImg,
    title: "Kids & Adult Martial Arts",
    description: "Build discipline, confidence, focus, fitness, flexibility, anti-bullying awareness, and self-defense skills in a positive and energetic environment.",
  },
  {
    image: kickboxingImg,
    title: "Kickboxing",
    description: "Professional kickboxing training focused on strength, speed, stamina, coordination, fat loss, and overall fitness.",
  },
  {
    image: karateImg,
    title: "Karate",
    description: "Traditional karate training that develops mental discipline, self-control, confidence, precision, and strong martial arts fundamentals.",
  },
  {
    image: mmaImg,
    title: "MMA (Mixed Martial Arts)",
    description: "Complete MMA training combining striking, grappling, conditioning, combat techniques, and competition preparation.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Our <span className="text-primary">Programs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="program-card group bg-card border border-border rounded-lg p-8 hover-glow hover-scale cursor-pointer flex flex-col items-center text-center"
            >
              <div
                className="program-logo flex items-center justify-center overflow-hidden rounded-full mb-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{
                  width: 90,
                  height: 90,
                  border: "2px solid hsl(0 100% 50% / 0.25)",
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full rounded-full"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
