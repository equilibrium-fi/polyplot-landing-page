const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          How It <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">Works</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-primary-cyan rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-gray-400">
              Connect your Polymarket account to start tracking your positions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-primary-cyan rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyze</h3>
            <p className="text-gray-400">
              Use our advanced tools to analyze market trends and opportunities.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-primary-cyan rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Trade Smarter</h3>
            <p className="text-gray-400">
              Make informed decisions with real-time data and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
