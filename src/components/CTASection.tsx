import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FE9508] to-[#8B5CF6] opacity-10" />

      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Trade Your Worldview
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Follow us for launch updates.
        </p>
        <a
          href="https://x.com/0xPolyplot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE9508] to-[#8B5CF6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Follow @0xPolyplot on X
        </a>
      </motion.div>
    </section>
  )
}
