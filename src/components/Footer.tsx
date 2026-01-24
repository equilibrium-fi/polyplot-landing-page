export default function Footer() {
  return (
    <footer className="bg-[#0B0B12]">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-[#FE9508] to-[#8B5CF6]" />

      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-4">
        <span className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#FE9508] bg-clip-text text-transparent">
          Polyplot
        </span>

        <a
          href="https://x.com/0xPolyplot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <p className="text-gray-500 text-sm">Built on Polymarket</p>
        <p className="text-gray-600 text-sm">&copy; 2026 Polyplot</p>
      </div>
    </footer>
  )
}
