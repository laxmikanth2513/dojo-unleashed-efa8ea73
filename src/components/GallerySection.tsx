import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import masterPhoto from "@/assets/master-photo.png";

const photos = [
  { src: heroBg, alt: "Training session", category: "Training" },
  { src: masterPhoto, alt: "Master instructor", category: "Master" },
  { src: heroBg, alt: "Sparring", category: "Sparring" },
  { src: masterPhoto, alt: "Belt ceremony", category: "Events" },
  { src: heroBg, alt: "Group training", category: "Training" },
];

const videos = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: heroBg, title: "MMA Training Highlights" },
  { src: "https://www.w3schools.com/html/movie.mp4", poster: masterPhoto, title: "Kickboxing Drills" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: heroBg, title: "Sparring Session" },
];

type Tab = "photos" | "videos";

const GallerySection = () => {
  const [tab, setTab] = useState<Tab>("photos");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const touchStart = useRef<number | null>(null);

  // Photo autoplay
  useEffect(() => {
    if (tab !== "photos" || !autoplay) return;
    const id = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % photos.length);
    }, 4000);
    return () => clearInterval(id);
  }, [tab, autoplay]);

  const next = () => {
    if (tab === "photos") setPhotoIndex((i) => (i + 1) % photos.length);
    else setVideoIndex((i) => (i + 1) % videos.length);
  };
  const prev = () => {
    if (tab === "photos") setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
    else setVideoIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">See Us In Action</p>
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

        {/* Slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card group hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
            <AnimatePresence mode="wait">
              {tab === "photos" ? (
                <motion.div
                  key={`photo-${photoIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={photos[photoIndex].src}
                    alt={photos[photoIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-heading text-xs sm:text-sm uppercase tracking-widest bg-primary/90 text-primary-foreground px-3 py-1 rounded">
                    {photos[photoIndex].category}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key={`video-${videoIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <video
                    key={videos[videoIndex].src}
                    src={videos[videoIndex].src}
                    poster={typeof videos[videoIndex].poster === "string" ? undefined : undefined}
                    controls
                    playsInline
                    className="w-full h-full object-cover bg-black"
                  />
                  <span className="absolute top-4 left-4 font-heading text-xs sm:text-sm uppercase tracking-widest bg-primary/90 text-primary-foreground px-3 py-1 rounded pointer-events-none">
                    {videos[videoIndex].title}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full p-2 sm:p-3 border border-border transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full p-2 sm:p-3 border border-border transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots + autoplay */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {(tab === "photos" ? photos : videos).map((_, i) => {
              const active = (tab === "photos" ? photoIndex : videoIndex) === i;
              return (
                <button
                  key={i}
                  onClick={() => (tab === "photos" ? setPhotoIndex(i) : setVideoIndex(i))}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/60"
                  }`}
                />
              );
            })}
            {tab === "photos" && (
              <button
                onClick={() => setAutoplay((a) => !a)}
                aria-label="Toggle autoplay"
                className="ml-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {autoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
