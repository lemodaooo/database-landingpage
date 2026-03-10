import { motion } from 'framer-motion';

export function FlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />

      {/* Animated flowing blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.2)" />
          </linearGradient>
          
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>

          <radialGradient id="blobGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>

          <radialGradient id="blobGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.25)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </radialGradient>

          {/* Filters */}
          <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
          <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        {/* Large flowing blob 1 */}
        <motion.ellipse
          cx="1200"
          cy="300"
          rx="400"
          ry="250"
          fill="url(#blobGradient1)"
          filter="url(#blur1)"
          animate={{
            cx: [1200, 1100, 1300, 1150, 1200],
            cy: [300, 400, 250, 350, 300],
            rx: [400, 450, 380, 420, 400],
            ry: [250, 280, 220, 260, 250],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Large flowing blob 2 */}
        <motion.ellipse
          cx="200"
          cy="600"
          rx="350"
          ry="200"
          fill="url(#blobGradient2)"
          filter="url(#blur2)"
          animate={{
            cx: [200, 300, 150, 250, 200],
            cy: [600, 500, 650, 550, 600],
            rx: [350, 380, 320, 360, 350],
            ry: [200, 220, 180, 210, 200],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Medium blob 3 */}
        <motion.ellipse
          cx="1000"
          cy="700"
          rx="250"
          ry="150"
          fill="url(#blobGradient1)"
          filter="url(#blur2)"
          animate={{
            cx: [1000, 1100, 950, 1050, 1000],
            cy: [700, 650, 750, 680, 700],
            rx: [250, 280, 230, 260, 250],
            ry: [150, 170, 140, 160, 150],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />

        {/* Small accent blob */}
        <motion.ellipse
          cx="700"
          cy="200"
          rx="180"
          ry="100"
          fill="url(#blobGradient2)"
          filter="url(#blur2)"
          animate={{
            cx: [700, 650, 750, 680, 700],
            cy: [200, 250, 150, 220, 200],
            rx: [180, 200, 160, 190, 180],
            ry: [100, 110, 90, 105, 100],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </svg>

      {/* Flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>

        {/* Curved flowing lines */}
        <motion.path
          d="M-100 800 Q400 600 800 400 T1600 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        />

        <motion.path
          d="M-100 850 Q500 650 900 450 T1700 250"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3.5, ease: 'easeOut', delay: 0.5 }}
        />

        <motion.path
          d="M-100 750 Q300 550 700 350 T1500 150"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: 'easeOut', delay: 1 }}
        />
      </svg>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(34, 211, 238, 0.5)',
              boxShadow: `0 0 ${4 + i}px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(34, 211, 238, 0.3)'}`,
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 5, 0.4) 100%)',
        }}
      />
    </div>
  );
}
