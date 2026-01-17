import { motion } from 'framer-motion';
import { FileText, ArrowUpDown, DollarSign } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Pick a Narrative",
      description: "Choose a theme that matches your market view.",
    },
    {
      number: 2,
      icon: ArrowUpDown,
      title: "Go Long or Short",
      description: "Think it'll happen? Go Long 👍. Think it won't? Go Short 👎.",
    },
    {
      number: 3,
      icon: DollarSign,
      title: "Get Paid When You're Right",
      description: "When all events resolve, winners get paid.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Step step={step} index={index} />

                {/* Connecting dashed line - only show between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] border-t-2 border-dashed border-primary-purple/30 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Step step={step} index={index} />

                {/* Connecting dashed line - only show between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-[calc(100%+1rem)] h-8 w-[2px] border-l-2 border-dashed border-primary-purple/30 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Step Component
const Step = ({ step, index }: { step: { number: number; icon: any; title: string; description: string }; index: number }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      {/* Circular number with gradient border */}
      <div className="p-[2px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-full mb-6">
        <div className="bg-bg-base rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
            {step.number}
          </span>
        </div>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-8 h-8 text-primary-cyan" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
};

export default HowItWorksSection;
