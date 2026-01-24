import HeroSection from './components/HeroSection'
import SolutionSection from './components/SolutionSection'
import HowItWorksSection from './components/HowItWorksSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* CTA Section */}
      <CTASection />

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
