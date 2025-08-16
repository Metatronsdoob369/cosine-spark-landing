import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type NodeSpec = { id: string; title: string; description: string };

const NODES: NodeSpec[] = [
  {
    id: "watcher",
    title: "Website Watcher",
    description:
      "Continuously monitors pages, uptime, and key changes; signals early so small ripples don't become waves.",
  },
  {
    id: "handler",
    title: "Email Handler",
    description:
      "Filters, routes, and drafts context-aware replies. Clears the noise, keeps the signal.",
  },
  {
    id: "responder",
    title: "Review Responder",
    description:
      "On-brand responses, auto-queued with human override. Protects reputation at scale.",
  },
];

const brand = {
  nodeIdle: "#909f96", // sage
  nodeActive: "#9aeba3", // mint
  path: "#9aeba3",
  cardBg: "#1e1e1e",
};

// simple sine path from (0,0) to (L,0)
function SinePath({ L = 220, amp = 10 }: { L?: number; amp?: number }) {
  const d = useMemo(() => {
    const steps = 24;
    const dx = L / steps;
    let p = `M 0 0`;
    for (let i = 1; i <= steps; i++) {
      const x = i * dx;
      const y = Math.sin((i / steps) * Math.PI * 2) * amp;
      p += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return p;
  }, [L, amp]);
  return (
    <motion.path
      d={d}
      stroke={brand.path}
      strokeWidth="2"
      fill="none"
      // draw once
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
  );
}

export function ServiceCircuit() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive((a) => (a === i ? null : i));

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="flex flex-col space-y-20">
        {NODES.map((node, idx) => {
          const isActive = active === idx;
          return (
            <div key={node.id} className="relative">
              {/* Node - n8n webhook trigger style */}
              <motion.button
                onClick={() => toggle(idx)}
                whileHover={{ scale: 1.04 }}
                className="relative w-16 h-16 flex items-center justify-center font-semibold text-white focus:outline-none"
                style={{
                  background: isActive ? brand.nodeActive : brand.nodeIdle,
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // hexagon
                }}
                animate={
                  isActive
                    ? { boxShadow: "0 0 18px 2px rgba(154,235,163,.45)" }
                    : {
                        // soft idle pulse (very subtle)
                        boxShadow: [
                          "0 0 0 0 rgba(154,235,163,0.00)",
                          "0 0 16px 3px rgba(154,235,163,0.18)",
                          "0 0 0 0 rgba(154,235,163,0.00)",
                        ],
                      }
                }
                transition={
                  isActive
                    ? { duration: 0.2 }
                    : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                }
                aria-pressed={isActive}
              >
                {/* Letter */}
                <span className="relative z-10">{node.title[0]}</span>
                
                {/* Spinning arrow when active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ 
                      rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path 
                        d="M6 1L10 6L6 11M10 6H2" 
                        stroke="rgba(255,255,255,0.8)" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.button>

              {/* Connector + Card (renders only when active) */}
              {isActive && (
                <div className="absolute left-20 top-7">
                  {/* wire: draw once, then subtle breathe */}
                  <motion.svg
                    width="260"
                    height="40"
                    viewBox="0 -20 260 40"
                    className="overflow-visible"
                  >
                    <SinePath L={220} amp={10} />
                    {/* tiny breathing shimmer */}
                    <motion.circle
                      r="2"
                      cx="220"
                      cy="0"
                      fill={brand.path}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    />
                  </motion.svg>

                  {/* n8n-style node card */}
                  <motion.div
                    className="ml-[220px] -mt-6 w-72 rounded-2xl p-5 border"
                    style={{ 
                      background: brand.cardBg,
                      borderColor: brand.nodeActive,
                      boxShadow: `0 0 12px 1px rgba(154,235,163,0.2)`
                    }}
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
                  >
                    {/* Node header like n8n */}
                    <div className="flex items-center mb-3">
                      <div 
                        className="w-8 h-8 flex items-center justify-center text-sm font-bold text-white mr-3"
                        style={{
                          background: brand.nodeActive,
                          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      >
                        {node.title[0]}
                      </div>
                      <h3 className="text-white text-base font-medium">{node.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{node.description}</p>
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}