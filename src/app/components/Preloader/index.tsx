// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const Preloader = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ duration: 0.5, delay: 1.5 }}
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <Image
//           src="/images/logo/logota.png"
//           alt="Logo"
//           width={180}
//           height={180}
//           priority
//           className="h-auto w-[180px]"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Preloader;



"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const particles = Array.from({ length: 18 });

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 2.8,
          ease: "easeInOut",
        },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Ambient glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.8, 1.15, 1],
          opacity: [0, 0.8, 0.45],
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]"
      />

      {/* Second energy glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[260px] w-[260px] rounded-full bg-red-500/20 blur-[80px]"
      />

      {/* Rotating outer energy ring */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 360,
        }}
        transition={{
          scale: {
            duration: 1,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.8,
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute h-[280px] w-[280px] rounded-full border border-orange-400/20 border-t-orange-400/90 border-r-red-500/70"
      />

      {/* Inner rotating ring */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: -360,
        }}
        transition={{
          scale: {
            duration: 0.8,
            delay: 0.15,
          },
          opacity: {
            duration: 0.8,
          },
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute h-[220px] w-[220px] rounded-full border border-red-400/10 border-b-orange-300/80 border-l-red-500/60"
      />

      {/* Fire / energy particles */}
      <div className="absolute h-[300px] w-[300px]">
        {particles.map((_, index) => {
          const angle = (360 / particles.length) * index;
          const distance = 120 + (index % 3) * 25;

          return (
            <motion.span
              key={index}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * distance,
                y: Math.sin((angle * Math.PI) / 180) * distance,
                scale: [0, 1.2, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.4 + (index % 4) * 0.25,
                delay: index * 0.07,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(251,146,60,0.9)]"
            />
          );
        })}
      </div>

      {/* Main logo */}
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
          filter: "blur(12px)",
        }}
        animate={{
          scale: [0.5, 1.08, 1],
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10"
      >
        {/* Logo glow */}
        <motion.div
          animate={{
            opacity: [0.35, 0.8, 0.35],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-orange-500/30 blur-2xl"
        />

        <Image
          src="/images/logo/logota.png"
          alt="Logo"
          width={170}
          height={170}
          priority
          className="relative h-auto w-[170px] drop-shadow-[0_0_25px_rgba(251,146,60,0.45)]"
        />
      </motion.div>

      {/* Bottom loading indicator */}
      <div className="absolute bottom-16 flex flex-col items-center gap-4">
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.6,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-orange-500 via-red-400 to-orange-300"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/40"
        >
          Loading Experience
        </motion.p>
      </div>

      {/* Cinematic flash at the end */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0, 8],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.82, 1],
          ease: "easeOut",
        }}
        className="pointer-events-none absolute h-20 w-20 rounded-full bg-orange-300 blur-3xl"
      />
    </motion.div>
  );
};

export default Preloader;
