const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
            Polyplot
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Advanced Market Analytics for Polymarket
        </p>
        <button className="bg-gradient-to-r from-primary-purple to-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
          Join Waitlist
        </button>
      </div>
    </section>
  )
}

export default HeroSection
