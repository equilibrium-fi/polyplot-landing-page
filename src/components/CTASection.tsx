const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">Started?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Join the waitlist and be among the first to experience Polyplot.
        </p>
        <button className="bg-gradient-to-r from-primary-purple to-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
          Join Waitlist
        </button>
      </div>
    </section>
  )
}

export default CTASection
