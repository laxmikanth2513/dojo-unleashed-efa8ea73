import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff, VideoOff, X } from "lucide-react";
import gym1 from "@/assets/gallery/gym-1.jpeg";
import gym2 from "@/assets/gallery/gym-2.jpeg";
import gym3 from "@/assets/gallery/gym-3.jpeg";
import gym4 from "@/assets/gallery/gym-4.jpeg";
import gym5 from "@/assets/gallery/gym-5.jpeg";
import gym6 from "@/assets/gallery/gym-6.jpeg";
import gym7 from "@/assets/gallery/gym-7.jpeg";
import gym8 from "@/assets/gallery/gym-8.jpeg";
import gym9 from "@/assets/gallery/gym-9.jpeg";
import gym10 from "@/assets/gallery/gym-10.jpeg";

const photos: { src: string; alt: string }[] = [
  { src: gym1, alt: "Training floor with Bruce Lee mural" },
  { src: gym3, alt: "Wide view of the dojo with equipment" },
  { src: gym4, alt: "Mat area with hanging punch bag" },
  { src: gym5, alt: "Premium training equipment rack" },
  { src: gym7, alt: "Full dojo view with trophies" },
  { src: gym8, alt: "Training mat with kickboxing gear" },
  { src: gym6, alt: "Olympic rings and trophy wall" },
  { src: gym2, alt: "Reception and waiting lounge" },
  { src: gym9, alt: "Master's office with Buddha mural" },
  { src: gym10, alt: "Office and trophy display" },
];

const videos: { src: string; poster?: string; title: string }[] = [];

type Tab = "photos" | "videos";

const GallerySection = () => {
  const [tab, setTab] = useState<Tab>("photos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">
            See Us In Action
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
            <span className="text-primary">Gallery</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10">
          {(["photos", "videos"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-heading uppercase tracking-widest text-sm sm:text-base px-6 sm:px-8 py-3 rounded-md border transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                  : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "photos" ? (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {photos.length === 0 ? (
                <EmptyState icon={<ImageOff className="w-10 h-10" />} label="No photos yet" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                  {photos.map((p, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setLightbox(i)}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card hover:border-primary/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500"
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary/40 rounded-xl transition-all" />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {videos.length === 0 ? (
                <EmptyState icon={<VideoOff className="w-10 h-10" />} label="No videos yet" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {videos.map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                      className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-card hover:border-primary/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500"
                    >
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover bg-black"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && photos[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={lightbox}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_60px_hsl(var(--primary)/0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const EmptyState = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="max-w-xl mx-auto text-center border border-dashed border-border rounded-xl py-16 px-6 bg-card/50">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <p className="font-heading uppercase tracking-widest text-muted-foreground">{label}</p>
    <p className="text-sm text-muted-foreground/80 mt-2">Upload new media to see it here.</p>
  </div>
);

export default GallerySection;
