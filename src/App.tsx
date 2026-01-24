import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Solution Section
          </h2>
          <p className="text-center text-gray-400">
            Coming soon...
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            How It Works
          </h2>
          <p className="text-center text-gray-400">
            Coming soon...
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Get Started
          </h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-long text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Buy Long 👍
            </button>
            <button className="bg-short text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Buy Short 👎
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400">
            © 2024 Polyplot. Follow us on{' '}
            <a
              href="https://x.com/0xPolyplot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-amber hover:underline"
            >
              X/Twitter
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
