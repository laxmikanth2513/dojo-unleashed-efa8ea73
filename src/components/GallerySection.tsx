import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ImageOff, VideoOff, X } from "lucide-react";
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
import gym11 from "@/assets/gallery/gym-11.jpeg";
import gym12 from "@/assets/gallery/gym-12.jpeg";
import gym13 from "@/assets/gallery/gym-13.jpeg";
import gym14 from "@/assets/gallery/gym-14.jpeg";
import gym15 from "@/assets/gallery/gym-15.jpeg";
import gym16 from "@/assets/gallery/gym-16.jpeg";
import gym17 from "@/assets/gallery/gym-17.jpeg";
import gym18 from "@/assets/gallery/gym-18.jpeg";
import gym19 from "@/assets/gallery/gym-19.jpeg";
import gym20 from "@/assets/gallery/gym-20.jpeg";
import video1 from "@/assets/videos/video-1.mp4";
import video2 from "@/assets/videos/video-2.mp4";
import video3 from "@/assets/videos/video-3.mp4";
import video4 from "@/assets/videos/video-4.mp4";
import video5 from "@/assets/videos/video-5.mp4";
import video6 from "@/assets/videos/video-6.mp4";
import video7 from "@/assets/videos/video-7.mp4";

// Add new images here — they'll automatically appear in the Photos slider.
const photos: { src: string; alt: string }[] = [
  { src: gym1, alt: "Training floor with Bruce Lee mural" },
  { src: gym3, alt: "Wide dojo view with equipment" },
  { src: gym4, alt: "Mat area with hanging punch bag" },
  { src: gym5, alt: "Premium training equipment rack" },
  { src: gym7, alt: "Full dojo view with trophies" },
  { src: gym8, alt: "Training mat with kickboxing gear" },
  { src: gym17, alt: "Heavy bag row in training hall" },
  { src: gym18, alt: "Mat area with karate mural" },
  { src: gym19, alt: "Spacious dojo with KARATE mural" },
  { src: gym20, alt: "Trophy wall and MNS Success banner" },
  { src: gym6, alt: "Olympic rings and trophy wall" },
  { src: gym11, alt: "Punching bag and floor view" },
  { src: gym14, alt: "Wide arena view" },
  { src: gym2, alt: "Reception and waiting lounge" },
  { src: gym12, alt: "Office and reception area" },
  { src: gym13, alt: "Office workstation" },
  { src: gym9, alt: "Master's office with Buddha mural" },
  { src: gym10, alt: "Office and trophy display" },
  { src: gym15, alt: "Office room with Buddha mural" },
  { src: gym16, alt: "Mat floor and equipment view" },
];

// Add videos here — they'll automatically appear in the Videos slider.
const videos: { src: string; poster?: string; title: string }[] = [
  { src: video1, title: "Training Session 1" },
  { src: video2, title: "Training Session 2" },
  { src: video3, title: "Training Session 3" },
  { src: video4, title: "Training Session 4" },
  { src: video5, title: "Training Session 5" },
  { src: video6, title: "Training Session 6" },
  { src: video7, title: "Training Session 7" },
];

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
                <MediaSlider
                  autoplay
                  items={photos.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(i)}
                      className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/70 hover:shadow-[0_0_35px_hsl(var(--primary)/0.45)] transition-all duration-500"
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                />
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
                <MediaSlider
                  aspect="video"
                  items={videos.map((v, i) => (
                    <div
                      key={i}
                      className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border bg-black hover:border-primary/70 hover:shadow-[0_0_35px_hsl(var(--primary)/0.45)] transition-all duration-500"
                    >
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                />
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

const MediaSlider = ({
  items,
  autoplay = false,
  aspect = "photo",
}: {
  items: React.ReactNode[];
  autoplay?: boolean;
  aspect?: "photo" | "video";
}) => {
  const plugins = autoplay
    ? [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: "trimSnaps" },
    plugins,
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [emblaApi]);

  const basis = aspect === "video" ? "lg:basis-1/2" : "md:basis-1/2 lg:basis-1/3";

  return (
    <div className="relative max-w-6xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4 sm:-ml-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`pl-4 sm:pl-6 min-w-0 shrink-0 grow-0 basis-full ${basis}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full p-2 sm:p-3 border border-border hover:border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full p-2 sm:p-3 border border-border hover:border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="flex items-center justify-center gap-2 mt-6">
        {snaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              selected === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </div>
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
