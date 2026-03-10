import { motion } from 'framer-motion';

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
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Join engineering teams at high-growth companies who trust Nexastream
            for mission-critical data ingestion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-blue hover:bg-blue-dark text-white text-sm font-medium rounded-xl transition-colors duration-200"
            >
              Start for free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-white text-sm font-medium rounded-xl border border-zinc-700 transition-colors duration-200"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
