import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Platform', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Developers', href: '#' },
  { label: 'Company', href: '#' },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState('Platform');

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 pt-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo - same blue gradient as Sign In button */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(to bottom, #61CBFF, #2668ED)',
                boxShadow: '0 10px 15px -3px rgba(38, 104, 237, 0.25), 0 4px 6px -4px rgba(38, 104, 237, 0.2)',
              }}
            >
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium text-lg">Nexastream</span>
          </div>

          {/* Navigation Links - Dark pill with lamp effect (elliptical white border & subtle white bg gradient) */}
          <div
            className="hidden md:flex items-center gap-3 backdrop-blur-lg py-1 px-1 rounded-full outline-none"
            style={{
              borderWidth: '0.5px',
              borderStyle: 'solid',
              borderColor: 'rgba(255,255,255,0.25)',
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={cn(
                  'relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors',
                  'text-zinc-200 hover:text-primary',
                  activeLink === link.label && 'text-primary'
                )}
                style={
                  activeLink === link.label
                    ? {
                        backgroundImage:
                          'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.2))',
                      }
                    : undefined
                }
              >
                {link.label}

                {activeLink === link.label && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#35A9F5] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <button type="button" className="beautiful-button">
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
