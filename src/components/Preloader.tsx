import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2800);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Ambient red smoke / glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(0 100% 45% / 0.35) 0%, hsl(0 80% 20% / 0.15) 35%, transparent 70%)",
            }}
          />
          <motion.div
            className="absolute -inset-40 pointer-events-none blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, hsl(0 100% 50% / 0.25), transparent 60%)",
            }}
          />

          {/* Brand Name */}
          <motion.div
            className="relative z-10 px-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [0.95, 1.04, 1] }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 2.6, ease: "easeInOut", times: [0, 0.5, 1] },
            }}
          >
            <motion.h1
              className="font-heading font-extrabold uppercase tracking-wider text-foreground text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              animate={{
                textShadow: [
                  "0 0 20px hsl(0 100% 50% / 0.4)",
                  "0 0 50px hsl(0 100% 50% / 0.9)",
                  "0 0 20px hsl(0 100% 50% / 0.4)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              MNS SUCCESS
              <span className="block text-primary">MARTIAL ARTS ACADEMY</span>
            </motion.h1>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-border/40 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
