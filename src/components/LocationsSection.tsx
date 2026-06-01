import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const locations = [
  {
    name: "MNS SUCCESS MARTIAL ARTS ACADEMY",
    address: "NALLAGANDLA, HUDA LAYOUT RD, WATER TANK RD, NEAR VISHNAVI FARMS, DR. SWATHI'S CLINIC",
    timings: "6 AM – 9 AM | 5 PM – 8 PM",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1439.500981881846!2d78.30669271412182!3d17.47370770898403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9320b4b006dd%3A0x5918e0ff54d72a97!2sMNS%20SUCCESS%20MARTIAL%20ARTS%20academy!5e1!3m2!1sen!2sin!4v1779767478263!5m2!1sen!2sin",
    mapUrl:
      "https://www.google.com/maps/place/MNS+SUCCESS+MARTIAL+ARTS+academy/@17.4737077,78.3066927,17z",
  },
  {
    name: "MNS SUCCESS MARTIAL ARTS ACADEMY",
    address: "New MIG, Road No. 15, Opposite of SPS School",
    timings: "5 AM – 9 AM",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.2618802612374!2d78.28180357494958!3d17.476371783426046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbedd078cd924d%3A0x90e17fe8e60d6e59!2sMNS%20SUCCESS%20MARTIAL%20ARTS%20ACADEMY!5e1!3m2!1sen!2sin!4v1779767519760!5m2!1sen!2sin",
    mapUrl:
      "https://www.google.com/maps/place/MNS+SUCCESS+MARTIAL+ARTS+ACADEMY/@17.4763718,78.2818036,17z",
  },
];

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
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">
            Find Us
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            Our <span className="text-primary">Locations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col bg-card border border-border rounded-lg overflow-hidden hover-glow transition-all duration-300"
            >
              {/* Map */}
              <div className="aspect-video w-full overflow-hidden border-b border-border">
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} Location ${index + 1}`}
                />
              </div>

              {/* Info */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase mb-6 text-primary leading-tight">
                  {loc.name}
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {loc.address}
                  </p>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    {loc.timings}
                  </p>
                </div>

                {/* Open in Maps */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-auto w-full py-3 px-6 rounded-lg font-heading font-bold uppercase tracking-wider text-sm md:text-base text-white bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_hsl(0_100%_50%_/_0.35)] hover:shadow-[0_0_30px_hsl(0_100%_50%_/_0.55)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
