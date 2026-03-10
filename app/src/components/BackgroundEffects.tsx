import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Blob 1 - Top Right */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1.1, 1.2, 1],
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 30, -10, 0],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '50% 60% 30% 60% / 30% 40% 70% 60%',
            '40% 50% 60% 30% / 60% 50% 40% 70%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue/40 blur-[120px]"
      />

      {/* Blob 2 - Bottom Left */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.3, 1.1, 1.2],
          x: [0, -40, 20, -10, 0],
          y: [0, 30, -40, 20, 0],
          borderRadius: [
            '40% 60% 50% 30% / 40% 50% 60% 50%',
            '60% 30% 40% 70% / 50% 40% 50% 60%',
            '30% 70% 60% 40% / 60% 50% 40% 50%',
            '50% 40% 30% 60% / 40% 60% 50% 40%',
            '40% 60% 50% 30% / 40% 50% 60% 50%',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] bg-cyan/30 blur-[100px]"
      />

      {/* Blob 3 - Center */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 20, -30, 15, 0],
          y: [0, -30, 20, -25, 0],
          borderRadius: [
            '50% 50% 40% 60% / 50% 40% 60% 50%',
            '40% 60% 50% 50% / 60% 50% 40% 60%',
            '60% 40% 50% 50% / 40% 60% 50% 40%',
            '50% 50% 60% 40% / 50% 40% 60% 50%',
            '50% 50% 40% 60% / 50% 40% 60% 50%',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
        className="absolute top-[60%] left-[30%] w-[500px] h-[500px] bg-blue/20 blur-[80px]"
      />

      {/* Blob 4 - Bottom Right */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 1, 1.2, 0.9],
          x: [0, -25, 35, -15, 0],
          y: [0, 20, -30, 25, 0],
          borderRadius: [
            '60% 40% 50% 50% / 40% 50% 50% 60%',
            '50% 60% 40% 50% / 50% 40% 60% 50%',
            '40% 50% 60% 40% / 60% 50% 40% 60%',
            '50% 40% 50% 60% / 50% 60% 50% 40%',
            '60% 40% 50% 50% / 40% 50% 50% 60%',
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 8,
        }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue/30 blur-[90px]"
      />
    </div>
  );
}
