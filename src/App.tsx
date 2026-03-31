import { useEffect, useState } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden flex flex-col">
      {/* Subtle grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cosmic gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-cyan-900/15 via-blue-900/10 to-transparent blur-3xl animate-pulse-slower" />

      {/* Horizon line */}
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="text-center">
          {/* Hello */}
          <div
            className={`transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span
              className="block font-cormorant text-[clamp(2rem,10vw,6rem)] font-light tracking-[0.2em] text-white/70"
              style={{
                textShadow: '0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.1)'
              }}
            >
              Hello
            </span>
          </div>

          {/* World */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span
              className="block font-unbounded text-[clamp(3rem,18vw,12rem)] font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40"
              style={{
                textShadow: '0 0 60px rgba(255, 255, 255, 0.1)',
              }}
            >
              World
            </span>
          </div>

          {/* Decorative dot */}
          <div
            className={`mt-8 md:mt-12 transition-all duration-1000 delay-700 ease-out ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          >
            <div className="relative inline-block">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-white/30 animate-ping-slow" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 pb-6 md:pb-8 transition-all duration-1000 delay-1000 ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-center text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/20 font-light">
          Requested by <span className="text-white/30">@web-user</span> · Built by <span className="text-white/30">@clonkbot</span>
        </p>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-unbounded {
          font-family: 'Unbounded', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App;
