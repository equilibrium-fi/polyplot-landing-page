export default function HeroSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen bg-bg-base flex items-center justify-center px-4 overflow-hidden">
            {/* Subtle grid pattern background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(254, 149, 8, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Brand name */}
                <h1 className="text-7xl md:text-8xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-accent-amber to-primary-purple bg-clip-text text-transparent">
                        Polyplot
                    </span>
                </h1>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    If you think you're right, just put money in.
                </h2>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
                    Turn your market views into tradeable positions.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Join Waitlist button - gradient background */}
                    <button
                        onClick={() => scrollToSection("cta")}
                        className="px-8 py-4 rounded-lg font-semibold text-white text-lg bg-gradient-to-r from-primary-purple to-accent-amber hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                        Join Waitlist
                    </button>

                    {/* See How It Works button - gradient border */}
                    <button
                        onClick={() => scrollToSection("solution")}
                        className="relative px-8 py-4 rounded-lg font-semibold text-white text-lg bg-transparent hover:bg-white/5 transition-all duration-200 group overflow-hidden"
                    >
                        {/* Gradient border */}
                        <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-primary-purple to-accent-amber">
                            <span className="flex h-full w-full items-center justify-center rounded-lg bg-bg-base"></span>
                        </span>
                        <span className="relative z-10">See How It Works</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
