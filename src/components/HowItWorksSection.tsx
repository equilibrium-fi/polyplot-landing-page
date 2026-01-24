import { motion } from 'framer-motion'
import { Layers, ArrowUpDown, Trophy } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Layers,
    title: 'Pick a Narrative',
    description: 'Choose a theme that matches your market view.',
  },
  {
    number: 2,
    icon: ArrowUpDown,
    title: 'Go Long or Short',
    description: "Think it'll happen? Go Long 👍. Think it won't? Go Short 👎.",
  },
  {
    number: 3,
    icon: Trophy,
    title: 'Get Paid When You\'re Right',
    description: 'When all events resolve, winners get paid.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-accent-amber to-primary-purple bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
          {/* Dashed connecting line - horizontal (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] border-t-2 border-dashed border-gray-700" />

          {/* Dashed connecting line - vertical (mobile) */}
          <div className="md:hidden absolute top-[72px] bottom-[72px] left-1/2 -translate-x-1/2 border-l-2 border-dashed border-gray-700" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 px-4"
            >
              {/* Numbered circle with gradient border */}
              <div className="rounded-full p-[2px] bg-gradient-to-br from-accent-amber to-primary-purple mb-4">
                <div className="w-16 h-16 rounded-full bg-bg-base flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-accent-amber to-primary-purple bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <step.icon className="w-6 h-6 text-accent-amber mb-3" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#A1A1AA] text-sm max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
