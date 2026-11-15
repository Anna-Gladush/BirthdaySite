import exampleImage3 from 'figma:asset/88e307259e220b48ceaabca2324c8db0117c168c.png';

interface BirthdaySectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function BirthdaySection({ onNext, onPrevious }: BirthdaySectionProps) {
  return (
    <div 
      className="min-h-screen relative bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${exampleImage3})` }}
    >
      {/* Music info banner */}
      <div className="absolute top-0 left-0 right-0 bg-pink-500 text-white p-4 text-center z-10">
        This presentation features "Make It With You" by Ben&Ben as background music. Click the music icon in the top-right corner to toggle the music.
      </div>

      {/* Main content */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-white/50 mt-16">
        <h1 className="text-pink-600 mb-6 italic" style={{ fontSize: '2.5rem', fontFamily: 'serif' }}>
          Happy Birthday, My Love!
        </h1>
        
        <div className="text-6xl mb-6">🎂</div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          A special scrapbook for the most special person in my life
        </p>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={onPrevious}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-colors duration-200 shadow-lg"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-colors duration-200 shadow-lg"
          >
            Next
          </button>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute animate-bounce" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
          <div className="text-pink-300 text-2xl opacity-60">💕</div>
        </div>
        <div className="absolute animate-bounce" style={{ top: '60%', right: '15%', animationDelay: '1s' }}>
          <div className="text-pink-400 text-xl opacity-70">💖</div>
        </div>
        <div className="absolute animate-bounce" style={{ top: '80%', left: '20%', animationDelay: '2s' }}>
          <div className="text-pink-300 text-lg opacity-50">💝</div>
        </div>
      </div>
    </div>
  );
}