import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-4 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
              From Worldview to Position
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Bundle multiple events into one Narrative. Long or Short with one click.
          </p>
        </div>

        {/* Visualization */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Event Cards */}
            <div className="space-y-4">
              <EventCard title="Event A" price="$0.65" delay={0} />
              <EventCard title="Event B" price="$0.58" delay={0.1} />
              <EventCard title="Event C" price="$0.72" delay={0.2} />
            </div>

            {/* Middle: Animated Arrows */}
            <div className="flex flex-col items-center justify-center lg:mx-8 my-8 lg:my-0">
              <ArrowAnimation delay={0} />
              <ArrowAnimation delay={0.2} />
              <ArrowAnimation delay={0.4} />
            </div>

            {/* Right: Narrative Card Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg"
            >
              <div className="bg-bg-card rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Narrative</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Example Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg">
            <div className="bg-bg-card rounded-lg p-6 md:p-8">
              {/* Card Header */}
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-bold mb-3">
                  🔥 Trump Tariff Narrative
                </div>
                <p className="text-text-secondary text-lg">
                  Will Trump go all-in on China tariffs?
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-4 p-4 bg-bg-base rounded-lg">
                <div className="text-text-secondary text-sm mb-2">Current Pricing</div>
                <div className="flex items-center justify-between text-lg">
                  <span className="text-status-long font-semibold">Long: $0.32</span>
                  <span className="text-text-muted">/</span>
                  <span className="text-status-short font-semibold">Short: $0.68</span>
                </div>
              </div>

              {/* Distribution */}
              <div className="mb-6 p-4 bg-bg-base rounded-lg">
                <div className="text-lg mb-2">📊 Market Position</div>
                <div className="flex items-center gap-4">
                  <span className="text-status-long font-semibold">72% Long</span>
                  <span className="text-text-muted">·</span>
                  <span className="text-status-short font-semibold">28% Short</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-status-long hover:bg-status-long/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <TrendingUp size={20} />
                  Buy Long 👍
                </button>
                <button className="bg-status-short hover:bg-status-short/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <TrendingDown size={20} />
                  Buy Short 👎
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Event Card Component
const EventCard = ({ title, price, delay }: { title: string; price: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-[1px] bg-gradient-to-r from-primary-purple/50 to-primary-cyan/50 rounded-lg"
    >
      <div className="bg-bg-card rounded-lg p-4">
        <div className="text-sm text-text-secondary mb-1">{title}</div>
        <div className="text-xl font-bold">{price}</div>
      </div>
    </motion.div>
  );
};

// Arrow Animation Component
const ArrowAnimation = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: [0, 1, 1, 0], x: [-10, 30, 30, 70] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut"
      }}
      className="my-1"
    >
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`arrow-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path
          d="M0 10 L50 10 M50 10 L42 3 M50 10 L42 17"
          stroke={`url(#arrow-gradient-${delay})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default SolutionSection;
