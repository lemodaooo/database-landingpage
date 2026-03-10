import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Road-like lines with moving blocks */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* Road path 1 */}
        <path
          id="roadPath1"
          d="M800 900 Q900 700 1000 600 Q1100 500 1200 400 Q1300 300 1400 200"
          stroke="url(#roadGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Road path 2 */}
        <path
          id="roadPath2"
          d="M850 900 Q950 700 1050 600 Q1150 500 1250 400 Q1350 300 1450 200"
          stroke="url(#roadGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Road path 3 */}
        <path
          id="roadPath3"
          d="M750 900 Q850 700 950 600 Q1050 500 1150 400 Q1250 300 1350 200"
          stroke="url(#roadGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      {/* Moving blocks using CSS animations */}
      <div className="absolute inset-0">
        {/* Block 1 */}
        <motion.div
          className="absolute w-5 h-2 rounded-sm"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #22d3ee)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <style>{`
            @keyframes moveBlock1 {
              0% { transform: translate(800px, 900px); opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { transform: translate(1400px, 200px); opacity: 0; }
            }
          `}</style>
        </motion.div>
      </div>

      {/* CSS-based moving blocks */}
      <style>{`
        @keyframes moveOnPath1 {
          0% { 
            transform: translate(800px, 900px) rotate(-35deg); 
            opacity: 0; 
          }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { 
            transform: translate(1400px, 200px) rotate(-35deg); 
            opacity: 0; 
          }
        }
        @keyframes moveOnPath2 {
          0% { 
            transform: translate(850px, 900px) rotate(-35deg); 
            opacity: 0; 
          }
          5% { opacity: 0.7; }
          95% { opacity: 0.7; }
          100% { 
            transform: translate(1450px, 200px) rotate(-35deg); 
            opacity: 0; 
          }
        }
        @keyframes moveOnPath3 {
          0% { 
            transform: translate(750px, 900px) rotate(-35deg); 
            opacity: 0; 
          }
          5% { opacity: 0.5; }
          95% { opacity: 0.5; }
          100% { 
            transform: translate(1350px, 200px) rotate(-35deg); 
            opacity: 0; 
          }
        }
        .moving-block-1 {
          animation: moveOnPath1 4s linear infinite;
        }
        .moving-block-2 {
          animation: moveOnPath2 5s linear infinite;
          animation-delay: 1s;
        }
        .moving-block-3 {
          animation: moveOnPath3 6s linear infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Moving blocks */}
      <div 
        className="absolute w-5 h-2 rounded-sm moving-block-1"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #22d3ee)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />
      <div 
        className="absolute w-4 h-1.5 rounded-sm moving-block-2"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #22d3ee)',
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)',
        }}
      />
      <div 
        className="absolute w-3 h-1 rounded-sm moving-block-3"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #22d3ee)',
          boxShadow: '0 0 6px rgba(59, 130, 246, 0.3)',
        }}
      />

      {/* Elliptical orbits with dashed lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>

        {/* Ellipse 1 */}
        <motion.ellipse
          cx="1000"
          cy="500"
          rx="300"
          ry="150"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1000px 500px' }}
        />

        {/* Ellipse 2 */}
        <motion.ellipse
          cx="1050"
          cy="550"
          rx="250"
          ry="120"
          stroke="rgba(59, 130, 246, 0.08)"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1050px 550px' }}
        />

        {/* Ellipse 3 */}
        <motion.ellipse
          cx="950"
          cy="450"
          rx="350"
          ry="180"
          stroke="rgba(59, 130, 246, 0.06)"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '950px 450px' }}
        />
      </svg>

      {/* Animated dash segments on ellipses using CSS */}
      <style>{`
        @keyframes orbitDash1 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitDash2 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes orbitDash3 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .orbit-dash-1 {
          animation: orbitDash1 30s linear infinite;
        }
        .orbit-dash-2 {
          animation: orbitDash2 25s linear infinite;
        }
        .orbit-dash-3 {
          animation: orbitDash3 35s linear infinite;
        }
      `}</style>

      {/* Orbiting dash lines */}
      <div 
        className="absolute orbit-dash-1"
        style={{
          left: '1000px',
          top: '500px',
          width: '600px',
          height: '300px',
          marginLeft: '-300px',
          marginTop: '-150px',
          borderRadius: '50%',
          border: '1px solid rgba(59, 130, 246, 0.1)',
        }}
      >
        <div 
          className="absolute w-8 h-0.5 rounded-full"
          style={{
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
          }}
        />
      </div>

      <div 
        className="absolute orbit-dash-2"
        style={{
          left: '1050px',
          top: '550px',
          width: '500px',
          height: '240px',
          marginLeft: '-250px',
          marginTop: '-120px',
          borderRadius: '50%',
          border: '1px solid rgba(59, 130, 246, 0.08)',
        }}
      >
        <div 
          className="absolute w-6 h-0.5 rounded-full"
          style={{
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)',
          }}
        />
      </div>

      <div 
        className="absolute orbit-dash-3"
        style={{
          left: '950px',
          top: '450px',
          width: '700px',
          height: '360px',
          marginLeft: '-350px',
          marginTop: '-180px',
          borderRadius: '50%',
          border: '1px solid rgba(59, 130, 246, 0.06)',
        }}
      >
        <div 
          className="absolute w-7 h-0.5 rounded-full"
          style={{
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          }}
        />
      </div>

      {/* Additional floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue/40 rounded-full"
            style={{
              left: `${60 + i * 8}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" fill="none">
          <motion.path
            d="M10 50 Q50 10 90 50"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="absolute bottom-40 right-40 w-24 h-24 opacity-15">
        <svg viewBox="0 0 100 100" fill="none">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10 10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: 'center' }}
          />
        </svg>
      </div>
    </div>
  );
}
