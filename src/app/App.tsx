import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import Cake from './components/BirthdayCake';

export default function App() {
  const [showAnniversaryMessage, setShowAnniversaryMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blie-50 to-blue-100 relative overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Birthday Header Section */}
        <section className="text-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 relative">
            <h1 className="text-blue-600 mb-6 italic" style={{ fontSize: '3rem', fontFamily: 'serif' }}>
              С днем рождения, Мамочка!
            </h1>
            <div className="text-6xl mb-6">🎂</div>
            <div className="bg-blue-100 rounded-2xl p-6 inline-block" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/StampBorder.png" alt="stamp-1" style={{ height: '35vh' }} />
              <div className="text-blue-500 mb-2" style={{ fontSize: '1.5rem' }}>
                16 Ноября, 2026
              </div>
              <div className="text-blue-400 text-sm">
                Поздравляю с твоим праздником! 🎉
              </div>
            </div>
          </div>
        </section>

        {/* Anniversary Section */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200 relative max-w-md mx-auto">

            <h2 className="text-blue-500 mb-4 text-center" style={{ fontSize: '2rem' }}>
              Еще один круг вокруг Солнышка!
            </h2>

            <p className="text-gray-600 mb-6 text-center">
              Нажми на кнопочку!! ( ◡ ◡ )⊃♥
            </p>

            <div className="text-center">
              <button
                onClick={() => setShowAnniversaryMessage(!showAnniversaryMessage)}
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition-colors duration-200 mb-6 text-sm"
              >
                Кнопочка!! ↣
              </button>
            </div>

            {showAnniversaryMessage && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6 animate-fadeIn">
                <p className="text-blue-600 text-sm italic text-center">
                  Каждый день с тобой ощущается как праздник! 💕
                  Спасибо, что делаешь мою жизнь намного ярче!
                  You're not just my love, you're my best friend, my adventure buddy, and my favorite person in the entire world! Thank you for making every ordinary moment extraordinary! 💖✨
                </p>
              </div>
            )}
          </div>
        </section>
        {/* Birthday cake */}
        <section>
          <Cake />
        </section>
        {/* Special Birthday Footer */}
        <section className="text-center">
          <div className="bg-white/95 rounded-3xl p-8 shadow-2xl" style={{ display: 'flex', gap: '50px' }}>
            <img src="/StampBorder-1.png" alt="stamp-2" style={{ height: '40vh' }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="mb-4 text-blue-500" style={{ fontSize: '2rem' }}>
                Thank you for being you! 💖
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Every moment with you is a gift. Here's to many more birthdays together!
              </p>
              <div className="flex justify-center gap-4 text-3xl">
                <span className="animate-bounce">🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating decorative elements throughout the page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top area decorations */}
        <div className="absolute animate-pulse" style={{ top: '15%', left: '15%', animationDelay: '0s' }}>
          <div className="text-blue-300 text-xl opacity-60">🎀</div>
        </div>
        <div className="absolute animate-pulse" style={{ top: '25%', right: '20%', animationDelay: '1s' }}>
          <div className="text-blue-400 text-lg opacity-70">🌸</div>
        </div>

        {/* Middle area decorations */}
        <div className="absolute animate-bounce" style={{ top: '45%', left: '10%', animationDelay: '0s' }}>
          <div className="text-blue-300 text-2xl opacity-60">💕</div>
        </div>
        <div className="absolute animate-bounce" style={{ top: '55%', right: '15%', animationDelay: '1s' }}>
          <div className="text-blue-400 text-xl opacity-70">💖</div>
        </div>

        {/* Bottom area decorations */}
        <div className="absolute animate-pulse" style={{ bottom: '20%', left: '25%', animationDelay: '2s' }}>
          <div className="text-blue-300 text-xl opacity-50">🦋</div>
        </div>
        <div className="absolute animate-bounce" style={{ bottom: '30%', right: '25%', animationDelay: '3s' }}>
          <Heart className="text-blue-400 w-5 h-5 opacity-60" />
        </div>

        {/* Additional floating hearts */}
        <div className="absolute animate-float" style={{ top: '35%', left: '5%', animationDelay: '1.5s' }}>
          <div className="text-blue-300 text-lg opacity-50">💝</div>
        </div>
        <div className="absolute animate-float" style={{ top: '65%', right: '10%', animationDelay: '2.5s' }}>
          <div className="text-blue-400 text-lg opacity-60">🌟</div>
        </div>
      </div>

      {/* Special birthday message overlay */}
      <div className="fixed top-1/2 left-4 transform -rotate-90 origin-center text-blue-300 text-xs font-medium opacity-60 pointer-events-none hidden sm:block">
        С днем рождения, 16 Ноября, 2026! 🎂
      </div>

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#fce7f3',
            border: '1px solid #f9a8d4',
            color: '#be185d',
          },
        }}
      />
    </div>
  );
}