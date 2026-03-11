import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Point = {
  x: number;
  y: number;
};

interface ConnectorPathProps {
  start: Point;
  end: Point;
  bend?: number;
  opacity?: number;
}

function ConnectorPath({ start, end, bend = 120, opacity = 0.75 }: ConnectorPathProps) {
  // 水平跨度与垂直跨度
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const minY = Math.min(start.y, end.y);
  const maxY = Math.max(start.y, end.y);

  // 基础曲率：在起点和终点之间形成明显弧度，但限制在 bend 以内
  const baseCurvature = Math.min(Math.abs(dy) * 0.6, bend);

  // 初始控制点（沿直线分布，再向下“拉弯”一些）
  let cp1Y = start.y + dy * 0.25 + baseCurvature * 0.4;
  let cp2Y = start.y + dy * 0.75 + baseCurvature * 0.7;

  // 保证控制点不超过起点和终点的垂直范围
  cp1Y = Math.max(minY, Math.min(maxY, cp1Y));
  cp2Y = Math.max(minY, Math.min(maxY, cp2Y));

  const cp1 = {
    x: start.x + dx * 0.25,
    y: cp1Y,
  };
  const cp2 = {
    x: start.x + dx * 0.75,
    y: cp2Y,
  };

  const d = `M ${start.x} ${start.y}
             C ${cp1.x} ${cp1.y},
               ${cp2.x} ${cp2.y},
               ${end.x} ${end.y}`;

  return (
    <path
      d={d}
      fill="none"
      stroke="url(#ingestCurveGrad)"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeDasharray="4 4"
      opacity={opacity}
      style={{
        filter: 'drop-shadow(0 0 6px rgba(71, 132, 255, 0.35))',
      }}
    />
  );
}

const sources = [
  { name: 'Stripe', icon: 'S' },
  { name: 'Slack', icon: '✱' },
  { name: 'Zapier', icon: 'Z' },
  { name: 'GitHub', icon: '◉' },
  { name: 'Segment', icon: '∑' },
];

const processors = [
  { name: 'Azure', icon: '▦' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Vercel', icon: '▲' },
  { name: 'GCP', icon: 'G' },
];

export function IngestionSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const [leftAnchors, setLeftAnchors] = useState<Point[]>([]);
  const [rightAnchors, setRightAnchors] = useState<Point[]>([]);
  const [centerPoint, setCenterPoint] = useState<Point | null>(null);

  useEffect(() => {
    const updatePositions = () => {
      const container = containerRef.current;
      const center = centerRef.current;
      if (!container || !center) return;

      const containerRect = container.getBoundingClientRect();
      const centerRect = center.getBoundingClientRect();

      const getBottomCenter = (el: HTMLDivElement | null): Point | null => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: r.left - containerRect.left + r.width / 2,
          y: r.top - containerRect.top + r.height,
        };
      };

      // POST 卡片顶部中心点（向上偏移 15px 作为连线终点）
      const x = centerRect.left - containerRect.left + centerRect.width / 2;
      const y = centerRect.top - containerRect.top - 25;

      const leftPoints = leftRefs.current.map(getBottomCenter).filter(Boolean) as Point[];
      const rightPoints = rightRefs.current.map(getBottomCenter).filter(Boolean) as Point[];

      setLeftAnchors(leftPoints);
      setRightAnchors(rightPoints);
      setCenterPoint({ x, y });
    };

    updatePositions();

    const onResize = () => updatePositions();
    window.addEventListener('resize', onResize);

    const ro = new ResizeObserver(() => updatePositions());
    if (containerRef.current) ro.observe(containerRef.current);
    if (centerRef.current) ro.observe(centerRef.current);
    leftRefs.current.forEach((el) => el && ro.observe(el));
    rightRefs.current.forEach((el) => el && ro.observe(el));

    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  const allLines = useMemo(() => {
    if (!centerPoint) return [];
    const lines: { start: Point; end: Point; opacity: number }[] = [];

    leftAnchors.forEach((p, i) => {
      lines.push({
        start: p,
        end: centerPoint,
        opacity: 0.72 + i * 0.04,
      });
    });

    rightAnchors.forEach((p, i) => {
      lines.push({
        start: p,
        end: centerPoint,
        opacity: 0.72 + i * 0.04,
      });
    });

    return lines;
  }, [leftAnchors, rightAnchors, centerPoint]);

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 
              className="text-[64px] text-white leading-[1.1]"
              style={{ fontFamily: "'Hedvig Letters Serif', serif" }}
            >
              Centralize your
              <br />
              <span 
                className="text-[104px] text-gradient italic leading-[1.1] mt-2 block"
                style={{ fontFamily: "'Italianno', cursive" }}
              >
                data ingestion
              </span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Capture telemetry across any infrastructure interaction—from server
              logs to API webhooks—and normalize it into a single structured stream
              linked to your data warehouse.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Nexastream integrates seamlessly with the tools you already use, so
              you can create pipelines directly from your cloud providers, SaaS
              platforms, or custom event emitters without managing complex schema
              registries.
            </p>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18, mass: 0.7 }}
              className="inline-flex items-center gap-2 text-blue hover:text-blue-light transition-colors duration-200"
            >
              Explore integrations
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right content - Data Flow Visualization */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div 
              ref={containerRef}
              className="rounded-3xl border border-zinc-800/50 p-6 overflow-hidden relative"
              style={{
                background: 'linear-gradient(180deg, rgba(12, 12, 16, 0.95) 0%, rgba(8, 8, 12, 0.98) 100%)',
              }}
            >
              {/* Full-container SVG for Bezier curves - behind content */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <defs>
                  <linearGradient id="ingestCurveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(148, 163, 184, 0.35)" />
                    <stop offset="35%" stopColor="rgba(102, 153, 255, 0.55)" />
                    <stop offset="100%" stopColor="rgba(54, 110, 255, 0.95)" />
                  </linearGradient>
                </defs>
                {allLines.map((line, i) => (
                  <ConnectorPath key={i} start={line.start} end={line.end} bend={110} opacity={line.opacity} />
                ))}
              </svg>

              {/* Top section - Sources and Processors */}
              <div className="relative z-10 flex justify-between mb-2">
                {/* Ingestion Sources */}
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">
                    INGESTION SOURCES
                  </p>
                  {/* 单排 5 个 source，左侧 */}
                  <div className="flex gap-2 flex-nowrap">
                    {sources.map((source, i) => (
                      <motion.div
                        key={source.name}
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold border border-zinc-800/50"
                        style={{ 
                          background: 'rgba(25, 25, 30, 0.8)',
                          color: '#fff',
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        ref={(el) => {
                          leftRefs.current[i] = el;
                        }}
                      >
                        {source.icon === '✱' ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                          </svg>
                        ) : source.icon === '◉' ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        ) : (
                          source.icon
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stream Processing */}
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">STREAM PROCESSING</p>
                  <div className="flex gap-2">
                    {processors.map((proc, i) => (
                      <motion.div
                        key={proc.name}
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold border border-zinc-800/50"
                        style={{ 
                          background: 'rgba(25, 25, 30, 0.8)',
                          color: '#fff',
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        ref={(el) => {
                          rightRefs.current[i] = el;
                        }}
                      >
                        {proc.icon === 'aws' ? (
                          <span className="text-xs font-bold">aws</span>
                        ) : proc.icon === '▦' ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                          </svg>
                        ) : proc.icon === '▲' ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L24 22H0L12 1z"/>
                          </svg>
                        ) : (
                          proc.icon
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Webhook request card */}
              <motion.div
                ref={centerRef}
                className="relative z-10 mt-[75px] mb-2 rounded-2xl border border-zinc-800/50 p-4"
                style={{ background: 'rgba(18, 18, 22, 0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-zinc-700/50" style={{ background: 'rgba(99, 91, 255, 0.15)' }}>
                      <span className="text-sm font-bold" style={{ color: '#635BFF' }}>S</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-xs">POST </span>
                      <span className="text-white text-sm font-mono">/v1/ingest/webhook</span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-500">24ms</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono truncate pl-11">
                  {"{"}"source":"stripe", "event":"charge.failed", "amount":490...{"}"}
                </p>
              </motion.div>

              {/* Dashed line from webhook card down到 NORMALIZER */}
              <div className="relative z-10 flex justify-center mb-2">
                <div
                  className="w-px h-4 border-l border-dashed"
                  style={{ borderColor: 'rgba(54, 110, 255, 0.7)', borderWidth: '0.7px' }}
                />
              </div>

              {/* NORMALIZER，垂直居于上下两卡片之间 */}
              <div className="relative z-10 flex justify-center mb-2">
                <motion.div
                  className="px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 border border-zinc-800/50"
                  style={{ 
                    background: 'rgba(20, 20, 25, 0.9)',
                    color: '#9ca3af',
                  }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: '#0FB981' }} />
                  NORMALIZER
                </motion.div>
              </div>

              {/* Dashed line from NORMALIZER down到 Production card */}
              <div className="relative z-10 flex justify-center mb-4">
                <div
                  className="w-px h-4 border-l border-dashed"
                  style={{ borderColor: 'rgba(54, 110, 255, 0.7)', borderWidth: '0.7px' }}
                />
              </div>

              {/* Production Database */}
              <motion.div
                className="relative z-10 rounded-2xl border border-zinc-800/50 p-4"
                style={{ background: 'rgba(18, 18, 22, 0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center border border-zinc-700/50" style={{ background: 'rgba(100, 100, 110, 0.2)' }}>
                      <svg className="w-3 h-3 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                      </svg>
                    </div>
                    <span className="text-sm text-white">Production Database</span>
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-zinc-600" />
                    <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  </div>
                </div>
                
                <div className="p-3 rounded-xl border border-zinc-800/50" style={{ background: 'rgba(12, 12, 16, 0.9)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: '#f97316' }} />
                      <span className="text-sm text-white">failed_payment_event</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px]" style={{ background: 'rgba(100, 100, 110, 0.2)', color: '#9ca3af' }}>
                        Q4 2024
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px]" style={{ background: 'rgba(100, 100, 110, 0.2)', color: '#9ca3af' }}>
                        17
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-1 font-mono">
                    id: evt_1N4k... • queue: retry-high
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
