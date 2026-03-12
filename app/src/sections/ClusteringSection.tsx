import { motion } from 'framer-motion';
import { Search, FileText, Users, BookOpen, Edit3, Code2 } from 'lucide-react';

export function ClusteringSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white mb-2 leading-[1.1]"
            style={{ fontFamily: "'PP Editorial New', 'Hedvig Letters Serif', serif" }}
          >
            Intelligent clustering via
          </h2>
          <h2 
            className="text-[48px] sm:text-[56px] md:text-[80px] lg:text-[112px] italic text-gradient mb-6 leading-[1.1]"
            style={{ fontFamily: "'Italianno', cursive" }}
          >
            semantic context
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Our cutting-edge engine groups incoming data streams by context using vector embeddings, allowing for automated classification and routing.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Automated Classification - 参考左1文档界面 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 lg:p-8 rounded-2xl border border-zinc-800/50 relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(24, 24, 28, 0.9) 0%, rgba(16, 16, 20, 0.95) 100%)',
            }}
          >
            {/* Visual - 文档界面风格 */}
            <div className="relative h-56 mb-6">
              <div className="w-full h-full rounded-xl border border-zinc-800/50 overflow-hidden" style={{ background: 'rgba(15, 15, 20, 0.95)' }}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white/90" />
                    </div>
                    <span className="text-sm font-medium text-white">Nexa</span>
                    <span className="text-sm text-zinc-500">Classifier</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/30">
                    <Search className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-xs text-zinc-500">Search tags...</span>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-6 px-4 py-2 border-b border-zinc-800/30">
                  <span className="text-xs text-emerald-400 border-b-2 border-emerald-400 pb-1">Auto Tags</span>
                  <span className="text-xs text-zinc-500">Manual Rules</span>
                </div>

                {/* Content */}
                <div className="flex h-[calc(100%-80px)]">
                  {/* Sidebar */}
                  <div className="w-32 border-r border-zinc-800/30 p-3 space-y-2">
                    <motion.div 
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-800/40"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <FileText className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="text-[10px] text-zinc-300">Events</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Users className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-[10px] text-zinc-500">Patterns</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-[10px] text-zinc-500">History</span>
                    </motion.div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-4">
                    <motion.div
                      className="text-emerald-400 text-xs mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Auto Classified
                    </motion.div>
                    <motion.div
                      className="text-white text-lg font-medium mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      Error Events
                    </motion.div>
                    <motion.p
                      className="text-zinc-500 text-xs"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      247 events grouped by semantic similarity
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-white mb-2">Automated Classification</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Reduce engineering time by tagging events based on semantic meaning and recurrence patterns.
            </p>
          </motion.div>

          {/* Card 2 - Granular Control - 参考左2代码编辑器 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 lg:p-8 rounded-2xl border border-zinc-800/50 relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(24, 24, 28, 0.9) 0%, rgba(16, 16, 20, 0.95) 100%)',
            }}
          >
            {/* Visual - 代码编辑器分栏风格 */}
            <div className="relative h-56 mb-6">
              <div className="w-full h-full rounded-xl border border-zinc-800/50 overflow-hidden" style={{ background: 'rgba(15, 15, 20, 0.95)' }}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400">filter.rules</span>
                  </div>
                  <span className="text-xs text-zinc-500">Live Preview</span>
                </div>

                {/* Split View */}
                <div className="flex h-[calc(100%-40px)]">
                  {/* Code Panel */}
                  <div className="w-1/2 border-r border-zinc-800/30 p-3 font-mono text-[10px] space-y-1">
                    <div className="flex gap-2">
                      <span className="text-zinc-600">1</span>
                      <span className="text-purple-400">##</span>
                      <span className="text-zinc-300">Filter Rules</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">2</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">3</span>
                      <span className="text-zinc-500">region:</span>
                      <span className="text-green-400">&quot;us-east-1&quot;</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">4</span>
                      <span className="text-zinc-500">latency:</span>
                      <span className="text-orange-400">{'>'} 500</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">5</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">6</span>
                      <span className="text-cyan-400">{'<Filter'}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">7</span>
                      <span className="text-zinc-400 pl-2">status=</span>
                      <span className="text-zinc-300">[500,502]</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-zinc-600">8</span>
                      <span className="text-cyan-400">{'/>'}</span>
                    </div>
                  </div>

                  {/* Preview Panel */}
                  <div className="w-1/2 p-4">
                    <motion.div
                      className="text-zinc-400 text-xs mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Active Filters
                    </motion.div>
                    <motion.div
                      className="text-white text-sm font-medium mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      High Latency Errors
                    </motion.div>
                    <motion.p
                      className="text-zinc-500 text-[10px] mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      12 events match
                    </motion.p>
                    
                    {/* Edit Card */}
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-xl border border-zinc-800/50 bg-zinc-800/30"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Edit3 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs text-white">Edit Rules</div>
                        <div className="text-[10px] text-zinc-500">Modify filters in real-time</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-white mb-2">Granular Control</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Apply filters and boolean operators to refine your data views instantly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
