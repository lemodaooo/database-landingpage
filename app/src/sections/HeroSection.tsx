import { motion } from 'framer-motion';
import { ArrowRight, FileText, LayoutGrid, Cpu, Zap } from 'lucide-react';
import { ShimmerButton } from '@/components/ShimmerButton';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          {/* Left content */}
          <div className="space-y-8">
            {/* Version badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue/10 text-blue text-xs font-medium rounded-full border border-blue/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                NEW VERSION 2.0
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 
                className="text-[64px] text-white leading-[1.1]"
                style={{ fontFamily: "'Hedvig Letters Serif', serif" }}
              >
                Orchestrate
              </h1>
              <h1 
                className="text-[104px] italic text-gradient leading-[1.1]"
                style={{ fontFamily: "'Italianno', cursive" }}
              >
                live insights
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-zinc-400 max-w-md leading-relaxed"
            >
              Ingest streams, transform with SQL, and materialize fresh results
              instantly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <ShimmerButton
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium"
                  background="rgba(24,24,27,0.9)"
                  borderRadius="999px"
                >
                  Start building
                  <ArrowRight className="w-4 h-4" />
                </ShimmerButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <ShimmerButton
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium border border-zinc-800/80 text-white bg-transparent"
                  background="rgba(24,24,27,0.4)"
                  borderRadius="999px"
                >
                  <FileText className="w-4 h-4" />
                  Documentation
                </ShimmerButton>
              </motion.div>
            </motion.div>

            {/* Trusted By - Refined logos */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-zinc-800/50"
            >
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
                Trusted by engineering teams at
              </p>
              <div className="flex items-center gap-10">
                {/* Asana */}
                <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="6" r="4" />
                    <circle cx="18" cy="6" r="4" />
                    <circle cx="6" cy="18" r="4" />
                    <circle cx="18" cy="18" r="4" />
                  </svg>
                  <span className="text-lg font-medium tracking-tight">asana</span>
                </div>
                
                {/* Graylog */}
                <div className="text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer font-mono text-lg tracking-tight">
                  graylog
                </div>
                
                {/* Google */}
                <div className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-lg font-medium tracking-tight">Google</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content - Floating Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Card 1 - DELIVER (Top Right) */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-[80px] w-[220px]"
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="p-4 rounded-2xl border border-zinc-700/50 shadow-xl"
                style={{
                  background: 'rgba(25, 25, 30, 0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-700/50">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-zinc-700/50 text-zinc-400 text-xs rounded">03</span>
                    <span className="text-sm font-medium text-white">DELIVER</span>
                  </div>
                  <LayoutGrid className="w-4 h-4 text-zinc-500" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: '#0FB981' }}
                    />
                    <span className="text-sm text-zinc-300">Endpoint Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Latency</span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: '#0FB981' }}
                    >
                      12ms
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2 - TRANSFORM (Middle Right) */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[180px] right-[140px] w-[240px]"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="p-4 rounded-2xl border border-zinc-700/50 shadow-xl"
                style={{
                  background: 'rgba(25, 25, 30, 0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-700/50">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-zinc-700/50 text-zinc-400 text-xs rounded">02</span>
                    <span className="text-sm font-medium text-white">TRANSFORM</span>
                  </div>
                  <Cpu className="w-4 h-4 text-zinc-500" />
                </div>
                
                {/* Code Block */}
                <div 
                  className="rounded-xl p-3 font-mono text-xs"
                  style={{ background: 'rgba(15, 15, 20, 0.9)' }}
                >
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <p>
                    <span style={{ color: '#BE82FA' }}>SELECT</span>
                    <span className="text-zinc-300"> * </span>
                    <span style={{ color: '#BE82FA' }}>FROM</span>
                    <span className="text-zinc-300"> stream </span>
                    <span style={{ color: '#BE82FA' }}>WHERE</span>
                  </p>
                  <p className="text-zinc-300">
                    val <span className="text-zinc-500">{'>'}</span>{' '}
                    <span className="text-zinc-400">0.95</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3 - INGEST (Bottom Right) */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[380px] right-[100px] w-[220px]"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="p-4 rounded-2xl border border-zinc-700/50 shadow-xl"
                style={{
                  background: 'rgba(25, 25, 30, 0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-700/50">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-zinc-700/50 text-zinc-400 text-xs rounded">01</span>
                    <span className="text-sm font-medium text-white">INGEST</span>
                  </div>
                  <Zap className="w-4 h-4 text-zinc-500" />
                </div>
                
                {/* Content */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
                        <span className="text-xs text-orange-400">K</span>
                      </div>
                      <span className="text-sm text-zinc-300">Kafka</span>
                    </div>
                    <span 
                      className="px-2 py-0.5 text-xs rounded-full border"
                      style={{ 
                        backgroundColor: 'rgba(15, 185, 129, 0.15)',
                        color: '#0FB981',
                        borderColor: 'rgba(15, 185, 129, 0.3)'
                      }}
                    >
                      Live
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-300">Postgres</span>
                    </div>
                    <span className="text-xs text-zinc-500">Syncing</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
