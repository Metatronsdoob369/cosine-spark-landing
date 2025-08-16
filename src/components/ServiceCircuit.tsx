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
              {/* Node */}
              <motion.button
                onClick={() => toggle(idx)}
                whileHover={{ scale: 1.04 }}
                className="w-16 h-16 rounded-full flex items-center justify-center font-semibold text-white focus:outline-none"
                style={{ background: isActive ? brand.nodeActive : brand.nodeIdle }}
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
                {node.title[0]}
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

                  {/* card */}
                  <motion.div
                    className="ml-[220px] -mt-6 w-72 rounded-2xl p-5"
                    style={{ background: brand.cardBg }}
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="text-white text-base font-medium mb-1">{node.title}</h3>
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