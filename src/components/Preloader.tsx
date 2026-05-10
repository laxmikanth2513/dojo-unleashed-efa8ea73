import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

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

          {/* Logo */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: [0.95, 1.05, 1],
            }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 2.6, ease: "easeInOut", times: [0, 0.5, 1] },
            }}
          >
            <motion.img
              src={logo}
              alt="MNS Success Martial Arts Academy"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_0_40px_hsl(0_100%_50%/0.6)]"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px hsl(0 100% 50% / 0.4))",
                  "drop-shadow(0 0 60px hsl(0 100% 50% / 0.8))",
                  "drop-shadow(0 0 20px hsl(0 100% 50% / 0.4))",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
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
