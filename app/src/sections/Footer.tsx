import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Pipelines', 'Connectors', 'Transformations', 'Observability', 'Enterprise'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Blog', 'Changelog'],
  Company: ['About', 'Careers', 'Customers', 'Partners', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Status'],
};

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 lg:mt-[130px] py-12 sm:py-16 border-t border-dark-border bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
              </div>
              <span className="text-white font-medium text-lg">Nexastream</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              The streaming data platform for modern engineering teams. Capture,
              transform, and route events with zero infrastructure overhead.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h4 className="text-sm font-medium text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            © 2026 Nexastream Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-zinc-400">All systems operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
