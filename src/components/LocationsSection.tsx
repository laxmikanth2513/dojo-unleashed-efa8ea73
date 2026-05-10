import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const LocationsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Find Us</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Our <span className="text-primary">Location</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden hover-glow"
        >
          <div className="aspect-video w-full overflow-hidden border-b border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.633!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MNS Success Martial Arts Academy Location"
            />
          </div>
          <div className="p-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-6 text-primary">
              MNS Success Martial Arts Academy
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">123 Fight Street, Warrior City, Hyderabad</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">Mon-Sat: 6AM – 10PM | Sun: 8AM – 4PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
