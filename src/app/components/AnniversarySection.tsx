import { useState } from 'react';
import exampleImage2 from 'figma:asset/48f339c235dd18963d9274a813db1b93727f86d0.png';

interface AnniversarySectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function AnniversarySection({ onNext, onPrevious }: AnniversarySectionProps) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${exampleImage2})` }}
    >
      {/* Main content card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-pink-200 relative">
        {/* Cute character icon */}
        <div className="bg-pink-100 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-pink-200">
          <div className="text-3xl">🐰</div>
        </div>

        <h2 className="text-pink-500 mb-4" style={{ fontSize: '2rem' }}>
          Happy one year and two months!
        </h2>

        <p className="text-pink-400 mb-6 text-lg">
          mi amor!
        </p>

        <div className="text-lg mb-4 text-gray-600">
          (o◡ ◡o)
        </div>

        <p className="text-gray-600 mb-6">
          Click the next button!! ( ◡ ◡ )⊃♥
        </p>

        <button
          onClick={() => setShowMessage(!showMessage)}
          className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors duration-200 mb-6 text-sm"
        >
          Next!! ↣
        </button>

        {showMessage && (
          <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 mb-6 animate-fadeIn">
            <p className="text-pink-600 text-sm italic">
              Every day with you feels like a celebration! 💕 
              Thank you for making my life so much brighter, my love!
            </p>
          </div>
        )}

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

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute animate-pulse" style={{ top: '15%', left: '15%', animationDelay: '0s' }}>
          <div className="text-pink-300 text-xl opacity-60">🎀</div>
        </div>
        <div className="absolute animate-pulse" style={{ top: '25%', right: '20%', animationDelay: '1s' }}>
          <div className="text-pink-400 text-lg opacity-70">🌸</div>
        </div>
        <div className="absolute animate-pulse" style={{ bottom: '20%', left: '25%', animationDelay: '2s' }}>
          <div className="text-pink-300 text-xl opacity-50">🦋</div>
        </div>
      </div>

      {/* Music pause button */}
      <div className="absolute top-4 right-20 bg-pink-400 hover:bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200">
        <span className="text-lg">⏸</span>
      </div>
    </div>
  );
}