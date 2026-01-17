import HeroSection from './components/HeroSection'
import SolutionSection from './components/SolutionSection'
import HowItWorksSection from './components/HowItWorksSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-base">
      <HeroSection />
      <SolutionSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
