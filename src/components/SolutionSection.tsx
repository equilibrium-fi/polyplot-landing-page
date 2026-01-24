import { motion } from 'framer-motion'

const events = [
  { label: 'Event A', price: '$0.65' },
  { label: 'Event B', price: '$0.42' },
  { label: 'Event C', price: '$0.78' },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-accent-amber to-primary-purple bg-clip-text text-transparent">
            From Worldview to Position
          </span>
        </h2>
        <p className="text-center text-[#A1A1AA] text-lg mb-16 max-w-2xl mx-auto">
          Bundle multiple events into one Narrative. Long or Short with one click.
        </p>

        {/* Visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {/* Left: Event Cards */}
          <div className="flex flex-col gap-4">
            {events.map((event, i) => (
              <motion.div
                key={event.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-bg-card border border-gray-800 rounded-lg px-5 py-3 text-sm"
              >
                <span className="text-white font-medium">{event.label}</span>
                <span className="text-[#71717A] ml-3">{event.price}</span>
              </motion.div>
            ))}
          </div>

          {/* Middle: Animated Arrows */}
          <div className="hidden md:flex items-center justify-center w-32">
            <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
              {[0, 1, 2].map((i) => {
                const startY = 20 + i * 40
                const d = i === 1
                  ? `M 5 ${startY} L 90 60`
                  : `M 5 ${startY} Q 50 ${startY} 90 60`
                return (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="url(#arrowGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
                  />
                )
              })}
              <defs>
                <linearGradient id="arrowGradient" gradientUnits="userSpaceOnUse" x1="5" y1="0" x2="90" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#FE9508" />
                </linearGradient>
              </defs>
              <motion.polygon
                points="88,54 98,60 88,66"
                fill="#FE9508"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
            </svg>
          </div>

          {/* Mobile arrow (down) */}
          <div className="flex md:hidden items-center justify-center h-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl bg-gradient-to-b from-primary-purple to-accent-amber bg-clip-text text-transparent"
            >
              ↓
            </motion.div>
          </div>

          {/* Right: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative rounded-xl p-[1px] bg-gradient-to-br from-primary-purple to-accent-amber"
          >
            <div className="bg-bg-card rounded-xl p-6 w-80">
              <h3 className="text-lg font-bold text-white mb-1">
                🔥 Trump Tariff Narrative
              </h3>
              <p className="text-[#A1A1AA] text-sm mb-4">
                Will Trump go all-in on China tariffs?
              </p>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-accent-amber">Long: $0.32</span>
                <span className="text-primary-purple">Short: $0.68</span>
              </div>

              <div className="text-xs text-[#71717A] mb-4">
                📊 72% Long · 28% Short
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-long text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  Buy Long 👍
                </button>
                <button className="flex-1 bg-short text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  Buy Short 👎
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
