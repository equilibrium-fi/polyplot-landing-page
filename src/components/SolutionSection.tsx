const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          The <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">Solution</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg">
            <div className="bg-bg-card rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Track market movements and price changes in real-time with advanced charting tools.
              </p>
            </div>
          </div>
          <div className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg">
            <div className="bg-bg-card rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
              <p className="text-gray-400">
                Gain deep insights into market trends and sentiment analysis.
              </p>
            </div>
          </div>
          <div className="p-[1px] bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg">
            <div className="bg-bg-card rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Smart Alerts</h3>
              <p className="text-gray-400">
                Never miss important market movements with customizable alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
