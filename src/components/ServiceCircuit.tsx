import { useEffect, useMemo, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type NodeSpec = { id: string; title: string; description: string; };

const NODES: NodeSpec[] = [
  { id: "watcher",  title: "Website Watcher",
    description: "Continuously monitors pages, uptime, and key changes; signals early so small ripples don't become waves." },
  { id: "handler",  title: "Email Handler",
    description: "Filters, routes, and drafts context-aware replies. Clears the noise, keeps the signal." },
  { id: "responder",title: "Review Responder",
    description: "On-brand responses, auto-queued with human override. Protects reputation at scale." },
];

const brand = {
  nodeIdle:  "#909f96",    // sage
  nodeActive:"#9aeba3",    // mint
  path:      "#9aeba3",
  cardBg:    "#1e1e1e",
};

function SinePath({ length=240, amp=10 }: {length?:number; amp?:number}) {
  // create a shallow sine svg path from (0,0) to (length,0)
  const d = useMemo(() => {
    const steps = 24;
    const dx = length / steps;
    let path = `M 0 0`;
    for (let i=1;i<=steps;i++){
      const x = i*dx;
      const y = Math.sin((i/steps) * Math.PI * 2) * amp * (i/steps); // slight ease-in
      path += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return path;
  }, [length, amp]);
  return (
    <motion.path
      d={d}
      stroke={brand.path}
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
  );
}

export function ServiceCircuit({ autoDemo=false }: { autoDemo?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const controls = useAnimationControls();

  // Auto-demo lights nodes one by one
  useEffect(() => {
    if (!autoDemo) return;
    let i = 0;
    const t = setInterval(() => {
      setActive((prev) => (prev === null || prev === NODES.length-1 ? 0 : (prev + 1)));
      i++;
    }, 1800);
    return () => clearInterval(t);
  }, [autoDemo]);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="flex flex-col space-y-20">
        {NODES.map((node, idx) => {
          const isActive = active === idx;
          return (
            <div key={node.id} className="relative">
              {/* node */}
              <motion.button
                onClick={() => setActive(idx)}
                className="w-16 h-16 rounded-full flex items-center justify-center font-semibold text-white"
                style={{ background: isActive ? brand.nodeActive : brand.nodeIdle }}
                animate={isActive ? {} : { boxShadow: ["0 0 0 0 rgba(0,0,0,0)", "0 0 24px 4px rgba(154,235,163,.35)", "0 0 0 0 rgba(0,0,0,0)"] }}
                transition={{ duration: 2.8, repeat: isActive ? 0 : Infinity }}
              >
                {node.title.split(" ")[0][0]}
              </motion.button>

              {/* connector + card */}
              <div className="absolute left-20 top-7">
                {isActive && (
                  <>
                    <motion.svg width="260" height="40" viewBox="0 -20 260 40" className="overflow-visible">
                      <SinePath length={220} amp={10} />
                    </motion.svg>
                    <motion.div
                      className="ml-[220px] -mt-6 w-72 rounded-2xl p-5"
                      style={{ background: brand.cardBg }}
                      initial={{ opacity: 0, y: -10, scale: .98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: .4 }}
                    >
                      <h3 className="text-white text-base font-medium mb-1">{node.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{node.description}</p>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}