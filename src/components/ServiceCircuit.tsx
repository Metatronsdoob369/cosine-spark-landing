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

const getServiceIcon = (nodeId: string) => {
  const icons = {
    watcher: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v12M6 12h12"/>
      </svg>
    ),
    handler: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    responder: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8M8 13h6"/>
      </svg>
    ),
  };
  return icons[nodeId as keyof typeof icons];
};

export function ServiceCircuit() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive((a) => (a === i ? null : i));

  return (
    <div className="flex flex-col items-center space-y-16 max-w-4xl mx-auto">
      {NODES.map((node, idx) => {
        const isActive = active === idx;
        return (
          <div key={node.id} className="flex items-center justify-center w-full">
            {/* Centered n8n-style node */}
            <motion.button
              onClick={() => toggle(idx)}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-gray-700 focus:outline-none transition-all duration-300"
              style={{
                background: isActive 
                  ? "linear-gradient(145deg, #9aeba3, #85d690)" 
                  : "linear-gradient(145deg, #f8f9fa, #e9ecef)",
                boxShadow: isActive
                  ? "0 8px 20px rgba(154,235,163,0.3), inset 0 1px 2px rgba(255,255,255,0.3)"
                  : "0 6px 15px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
              animate={
                isActive
                  ? { boxShadow: "0 8px 20px rgba(154,235,163,0.4), inset 0 1px 2px rgba(255,255,255,0.3)" }
                  : {
                      boxShadow: [
                        "0 6px 15px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)",
                        "0 8px 18px rgba(154,235,163,0.15), inset 0 1px 2px rgba(255,255,255,0.8)",
                        "0 6px 15px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)",
                      ],
                    }
              }
              transition={
                isActive
                  ? { duration: 0.2 }
                  : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {/* Service Icon */}
              <div className={`${isActive ? 'text-white' : 'text-gray-600'} transition-colors duration-300`}>
                {getServiceIcon(node.id)}
              </div>
              
              {/* Processing indicator when active */}
              {isActive && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.button>

            {/* Expanded card (appears to the right when active) */}
            {isActive && (
              <motion.div
                className="ml-8 max-w-md"
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    background: "linear-gradient(145deg, #1e1e1e, #2a2a2a)",
                    borderColor: "#9aeba3",
                    boxShadow: "0 8px 25px rgba(154,235,163,0.2), inset 0 1px 2px rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Header with icon */}
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 mr-4"
                      style={{
                        background: "linear-gradient(145deg, #9aeba3, #85d690)",
                        boxShadow: "0 4px 10px rgba(154,235,163,0.3)",
                      }}
                    >
                      <div className="text-white">
                        {getServiceIcon(node.id)}
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold font-monument">{node.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{node.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}