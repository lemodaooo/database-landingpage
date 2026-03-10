import { motion } from 'framer-motion';

const logos = [
  { name: 'asana', text: 'asana' },
  { name: 'graylog', text: 'graylog' },
  { name: 'Google', text: 'Google' },
];

export function TrustedBy() {
  return (
    <section className="py-12 border-t border-dark-border bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8"
        >
          <p className="text-xs font-medium text-zinc-500 tracking-wider uppercase">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl font-medium text-zinc-600 hover:text-zinc-400 transition-colors duration-300 cursor-default"
              >
                {logo.name === 'asana' && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <circle cx="5" cy="17" r="4" />
                      <circle cx="19" cy="17" r="4" />
                    </svg>
                    {logo.text}
                  </div>
                )}
                {logo.name === 'graylog' && (
                  <span className="font-mono">{logo.text}</span>
                )}
                {logo.name === 'Google' && (
                  <span className="font-medium">{logo.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
