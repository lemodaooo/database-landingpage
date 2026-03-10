import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Workflow, Layers } from 'lucide-react';

const experts = [
  {
    name: 'Streamline Studio',
    location: 'Berlin, Germany',
    specialty: 'Data Pipeline Automation',
    description: 'Automated ETL workflows for enterprise scale.',
    icon: Database,
    color: '#3b82f6',
    visual: 'pipeline',
  },
  {
    name: 'DataOps Labs',
    location: 'San Francisco, US',
    specialty: 'Real-time Analytics',
    description: 'Low-latency dashboards for fintech.',
    icon: Cpu,
    color: '#0FB981',
    visual: 'analytics',
  },
  {
    name: 'Pipeline Pros',
    location: 'London, UK',
    specialty: 'Webhook Integration',
    description: 'Seamless webhook processing at scale.',
    icon: Workflow,
    color: '#BE82FA',
    visual: 'webhook',
  },
  {
    name: 'Query Masters',
    location: 'Toronto, Canada',
    specialty: 'Query Optimization',
    description: 'Advanced SQL tuning and optimization.',
    icon: Layers,
    color: '#f59e0b',
    visual: 'query',
  },
];

export function ExpertsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-sm text-zinc-500 mb-2">Get matched</p>
            <h2 
              className="text-[64px] text-white leading-[1.1]"
              style={{ fontFamily: "'Hedvig Letters Serif', serif" }}
            >
              Get pro help from
              <br />
              <span 
                className="text-[104px] text-gradient italic leading-[1.1] mt-2 block"
                style={{ fontFamily: "'Italianno', cursive" }}
              >
                handpicked experts
              </span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-blue-dark text-white text-sm font-medium rounded-full transition-colors duration-200"
          >
            Find an Expert
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Bento Grid - Expert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative rounded-3xl border border-zinc-800/50 transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(20, 20, 25, 0.6)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                {/* Top glow effect */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${expert.color}40 0%, transparent 70%)`,
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px]">
                  {/* Visual/Graphic area */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    {expert.visual === 'pipeline' && (
                      <div className="relative">
                        {/* Pipeline flow visualization */}
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl border border-zinc-700/50 flex items-center justify-center" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                            <Database className="w-5 h-5" style={{ color: expert.color }} />
                          </div>
                          <div className="w-8 h-0.5 bg-zinc-700/50 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-3 animate-pulse" style={{ background: expert.color }} />
                          </div>
                          <div className="w-10 h-10 rounded-xl border border-zinc-700/50 flex items-center justify-center" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                            <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: expert.color }}>
                              <div className="w-2 h-2 rounded-full" style={{ background: expert.color }} />
                            </div>
                          </div>
                          <div className="w-8 h-0.5 bg-zinc-700/50 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-3 animate-pulse" style={{ background: expert.color, animationDelay: '0.2s' }} />
                          </div>
                          <div className="w-10 h-10 rounded-xl border border-zinc-700/50 flex items-center justify-center" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                            <Layers className="w-5 h-5" style={{ color: expert.color }} />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {expert.visual === 'analytics' && (
                      <div className="relative">
                        {/* Analytics chart visualization */}
                        <div className="w-32 h-20 rounded-xl border border-zinc-700/50 p-3" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                          <div className="flex items-end justify-between h-full gap-1">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                              <div 
                                key={i} 
                                className="w-3 rounded-t-sm transition-all duration-300"
                                style={{ 
                                  height: `${h}%`, 
                                  background: i === 5 ? expert.color : 'rgba(100, 100, 110, 0.3)',
                                }} 
                              />
                            ))}
                          </div>
                        </div>
                        {/* Live indicator */}
                        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(15, 185, 129, 0.2)', color: '#0FB981' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live
                        </div>
                      </div>
                    )}
                    
                    {expert.visual === 'webhook' && (
                      <div className="relative">
                        {/* Webhook signal visualization */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-14 h-14 rounded-2xl border border-zinc-700/50 flex items-center justify-center" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                            <Workflow className="w-7 h-7" style={{ color: expert.color }} />
                          </div>
                          {/* Signal waves */}
                          <div className="flex items-center gap-1">
                            {[1, 2, 3].map((i) => (
                              <div 
                                key={i}
                                className="w-6 h-0.5 rounded-full"
                                style={{ 
                                  background: expert.color,
                                  opacity: 1 - i * 0.25,
                                }} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {expert.visual === 'query' && (
                      <div className="relative">
                        {/* Query code visualization */}
                        <div className="w-36 p-3 rounded-xl border border-zinc-700/50 font-mono text-xs" style={{ background: 'rgba(15, 15, 20, 0.8)' }}>
                          <div className="flex gap-1 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          </div>
                          <p style={{ color: '#BE82FA' }}>SELECT *</p>
                          <p className="text-zinc-400">FROM events</p>
                          <p style={{ color: '#BE82FA' }}>WHERE status</p>
                          <p className="text-zinc-400">= 'active'</p>
                        </div>
                        {/* Speed indicator */}
                        <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-xs border" style={{ background: 'rgba(20, 20, 25, 0.9)', borderColor: `${expert.color}40`, color: expert.color }}>
                          &lt;5ms
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text content */}
                  <div>
                    <p className="text-xs mb-1" style={{ color: expert.color }}>
                      {expert.specialty}
                    </p>
                    <h3 className="text-lg font-medium text-white mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-2">{expert.location}</p>
                    <p className="text-sm text-zinc-400">{expert.description}</p>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
