import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <h2 
            className="text-[64px] text-white leading-[1.1]"
            style={{ fontFamily: "'Hedvig Letters Serif', serif" }}
          >
            Ready to unify
            <br />
            <span 
              className="text-[104px] text-gradient italic leading-[1.1] mt-2 block"
              style={{ fontFamily: "'Italianno', cursive" }}
            >
              your data stack?
            </span>
          </h2>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-[40rem] h-40"
              style={{ top: '-43px' }}
            >
              <div
                className="w-full h-full relative bg-transparent overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(ellipse 85% 100% at 50% 18%, black 0%, black 25%, transparent 82%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 100% at 50% 18%, black 0%, black 25%, transparent 82%)',
                }}
              >
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mt-[60px]">
              {/* Primary CTA - match navbar Sign In size & style */}
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.7 }}
                className="beautiful-button"
              >
                Start for free
              </motion.button>

              {/* Secondary CTA - same size & radius, outline style */}
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.7 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-zinc-700 bg-transparent text-white"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
