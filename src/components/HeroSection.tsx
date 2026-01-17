import logoImage from '../assets/polyplot-logo.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-bg-base px-4 flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logoImage}
            alt="Polyplot Logo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl"
          />
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
            Polyplot
          </span>
        </h1>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          If You Think You're Right,<br />Put Money On It
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto">
          Turn your market views into tradeable positions. No research needed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Join Waitlist - Gradient background */}
          <button
            onClick={() => scrollToSection('waitlist')}
            className="bg-gradient-to-r from-primary-purple to-primary-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Join Waitlist
          </button>

          {/* See How It Works - Gradient border */}
          <button
            onClick={() => scrollToSection('solution')}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg opacity-100 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-bg-base m-[2px] px-8 py-4 rounded-lg font-semibold text-lg text-white">
              See How It Works
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
