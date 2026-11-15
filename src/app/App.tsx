import { useState } from 'react';
import { Send, Heart, Music, VolumeX, Camera } from 'lucide-react';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';
import whyILoveYouImage from 'figma:asset/67fca497e756efed1b53be6c39ba8d30b4c9e2de.png';
import foreverStartsImage from 'figma:asset/6fc5f77341aa5d06285d99866cd28c1cedb22771.png';
import interactiveLoveImage from 'figma:asset/33257ddf7bbe78740dd6e5962426fc5f32c5bf26.png';

export default function App() {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnniversaryMessage, setShowAnniversaryMessage] = useState(false);
  const [heartCount, setHeartCount] = useState(16);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSubmitMessage = () => {
    if (message.trim()) {
      setIsSubmitted(true);
      toast("Message sent to my heart! 💕", {
        description: "Your sweet words mean the world to me!",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      toast("Please write a message first! 💖");
    }
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const incrementHeartCount = () => {
    setHeartCount(prev => prev + 1);
    toast("💕 That's one more reason I love you!", {
      description: `I've thought of you ${heartCount + 1} times just today!`,
    });
  };

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    toast("💖 Surprise! You're the best thing that ever happened to me!", {
      description: "Every day with you is a beautiful adventure!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-x-hidden">
      {/* Music Player */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMusic}
          variant="ghost"
          size="icon"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 rounded-full shadow-lg transition-all duration-300"
        >
          {isPlaying ? (
            <Music className="h-5 w-5 text-pink-600" />
          ) : (
            <VolumeX className="h-5 w-5 text-pink-400" />
          )}
        </Button>
        
        {isPlaying && (
          <div className="mt-2 text-center">
            <div className="text-xs text-white/80 bg-pink-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              ♪ Make It With You ♪
            </div>
          </div>
        )}
      </div>

      {/* Music Info Banner */}
      <div className="bg-pink-500 text-white p-4 text-center relative z-10">
        This presentation features "Make It With You" by Ben&Ben as background music. Click the music icon in the top-right corner to toggle the music.
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Birthday Header Section */}
        <section className="text-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 relative">
            <h1 className="text-pink-600 mb-6 italic" style={{ fontSize: '3rem', fontFamily: 'serif' }}>
              Happy Birthday, My Love!
            </h1>
            
            <div className="text-6xl mb-6">🎂</div>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              A special scrapbook for the most special person in my life
            </p>

            <div className="bg-pink-100 rounded-2xl p-6 inline-block">
              <div className="text-pink-500 mb-2" style={{ fontSize: '1.5rem' }}>
                October 12th, 2024
              </div>
              <div className="text-pink-400 text-sm">
                The day we celebrate you! 🎉
              </div>
            </div>
          </div>
        </section>

        {/* Anniversary Section */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 relative max-w-md mx-auto">
            {/* Cute character icon */}
            <div className="bg-pink-100 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-pink-200">
              <div className="text-3xl">🐰</div>
            </div>

            <h2 className="text-pink-500 mb-4 text-center" style={{ fontSize: '2rem' }}>
              Happy one year and two months!
            </h2>

            <p className="text-pink-400 mb-6 text-lg text-center">
              mi amor!
            </p>

            <div className="text-lg mb-4 text-gray-600 text-center">
              (o◡ ◡o)
            </div>

            <p className="text-gray-600 mb-6 text-center">
              Click the next button!! ( ◡ ◡ )⊃♥
            </p>

            <div className="text-center">
              <button
                onClick={() => setShowAnniversaryMessage(!showAnniversaryMessage)}
                className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors duration-200 mb-6 text-sm"
              >
                Next!! ↣
              </button>
            </div>

            {showAnniversaryMessage && (
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 mb-6 animate-fadeIn">
                <p className="text-pink-600 text-sm italic text-center">
                  Every day with you feels like a celebration! 💕 
                  Thank you for making my life so much brighter, my love!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why I Love You Section */}
        <section className="mb-16">
          <div 
            className="rounded-3xl p-8 shadow-2xl relative bg-cover bg-center"
            style={{ backgroundImage: `url(${whyILoveYouImage})` }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-pink-500 mb-4 italic" style={{ fontSize: '2.5rem', fontFamily: 'serif' }}>
                  Why I Love You
                </h2>
                <p className="text-gray-600 mb-8">
                  Just a few of the million reasons... 💕
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">😍</div>
                  <h3 className="text-pink-500 mb-3 italic">Your Beautiful Smile</h3>
                  <p className="text-gray-600 text-sm">
                    It lights up my entire world and makes everything better
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">🤗</div>
                  <h3 className="text-pink-500 mb-3 italic">Your Warm Hugs</h3>
                  <p className="text-gray-600 text-sm">
                    They make me feel safe, loved, and completely at home
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">😂</div>
                  <h3 className="text-pink-500 mb-3 italic">Your Contagious Laugh</h3>
                  <p className="text-gray-600 text-sm">
                    It's the most beautiful sound in the world to me
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">💝</div>
                  <h3 className="text-pink-500 mb-3 italic">Your Kind Heart</h3>
                  <p className="text-gray-600 text-sm">
                    The way you care for others shows your beautiful soul
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-pink-500 mb-3 italic">Your Amazing Dreams</h3>
                  <p className="text-gray-600 text-sm">
                    Your ambition and passion inspire me every single day
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100 text-center">
                  <div className="text-3xl mb-3">🎵</div>
                  <h3 className="text-pink-500 mb-3 italic">The Way You Dance</h3>
                  <p className="text-gray-600 text-sm">
                    Even if it's just in the kitchen, you make life a celebration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forever Starts Here Section */}
        <section className="mb-16">
          <div 
            className="rounded-3xl p-8 shadow-2xl relative bg-cover bg-center"
            style={{ backgroundImage: `url(${foreverStartsImage})` }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center max-w-2xl mx-auto">
              <h2 className="text-pink-500 mb-8 italic" style={{ fontSize: '2.5rem', fontFamily: 'serif' }}>
                Forever Starts Here
              </h2>

              {/* Photo placeholder circle */}
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center text-gray-600 border-4 border-pink-300 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl mb-2">Us</div>
                  </div>
                </div>
                <button
                  onClick={handleSurpriseClick}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-pink-200 hover:bg-pink-50 transition-colors duration-200"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-pink-200 text-sm text-gray-600">
                  📷 Change Photo
                </div>
              </div>

              <div className="mt-12">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Every moment with you is an adventure I cherish. This scrapbook is just the beginning of our beautiful journey together. Here's to a lifetime of love, laughter, and endless adventures.
                </p>

                <p className="text-gray-700 mb-8 italic" style={{ fontSize: '1.5rem', fontFamily: 'serif' }}>
                  I love you more than yesterday, but less than tomorrow.
                </p>

                <Button
                  onClick={handleSurpriseClick}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Click for a Surprise!
                </Button>

                {showSurprise && (
                  <div className="mt-6 bg-pink-50 border-2 border-pink-200 rounded-xl p-6 animate-fadeIn">
                    <div className="text-4xl mb-4">🎉</div>
                    <p className="text-pink-600 italic">
                      Surprise! You're not just my love, you're my best friend, my adventure buddy, and my favorite person in the entire world! Thank you for making every ordinary moment extraordinary! 💖✨
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Love Stuff Section */}
        <section className="mb-16">
          <div 
            className="rounded-3xl p-8 shadow-2xl relative bg-cover bg-center"
            style={{ backgroundImage: `url(${interactiveLoveImage})` }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-gray-700 mb-4" style={{ fontSize: '2.5rem' }}>
                  Interactive Love Stuff
                </h2>
                <p className="text-gray-600 mb-8">
                  Little things to play with because I love to see you smile
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm mb-2">Click the heart to count how many times I think of you:</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl mb-2">{heartCount}</div>
                      <button
                        onClick={incrementHeartCount}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200 transform hover:scale-110"
                      >
                        <Heart className="w-8 h-8 text-white fill-current" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-sm italic">
                    Spoiler alert: I think of you way more than {heartCount} times! 💕
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            {/* Header with hearts */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="text-pink-400 w-8 h-8 animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="text-pink-500 text-2xl">💌</div>
                <h1 className="text-pink-500 text-4xl italic" style={{ fontFamily: 'serif' }}>
                  Leave Me a Message
                </h1>
                <Heart className="text-pink-400 w-6 h-6" />
              </div>
              <Heart className="text-pink-400 w-8 h-8 animate-pulse" />
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Want to send me a sweet message? Click below to leave your thoughts!
            </p>
          </div>

          {/* Message form card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 max-w-2xl mx-auto">
            <div className="space-y-6">
              <Textarea
                placeholder="Write your sweet message here... 💕"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl resize-none"
              />
              
              <div className="text-center">
                <Button
                  onClick={handleSubmitMessage}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  disabled={isSubmitted}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitted ? "Message Sent! 💕" : "Send a Message"}
                </Button>
              </div>

              {isSubmitted && (
                <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 animate-fadeIn">
                  <p className="text-pink-600 italic text-center">
                    Your message has been received in my heart! Thank you for making my birthday extra special! 💖
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Special Birthday Footer */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-3xl p-8 shadow-2xl">
            <h3 className="mb-4" style={{ fontSize: '2rem' }}>
              Thank you for being you! 💖
            </h3>
            <p className="text-pink-100 mb-6 text-lg leading-relaxed">
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
        </section>
      </div>

      {/* Floating decorative elements throughout the page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top area decorations */}
        <div className="absolute animate-pulse" style={{ top: '15%', left: '15%', animationDelay: '0s' }}>
          <div className="text-pink-300 text-xl opacity-60">🎀</div>
        </div>
        <div className="absolute animate-pulse" style={{ top: '25%', right: '20%', animationDelay: '1s' }}>
          <div className="text-pink-400 text-lg opacity-70">🌸</div>
        </div>
        
        {/* Middle area decorations */}
        <div className="absolute animate-bounce" style={{ top: '45%', left: '10%', animationDelay: '0s' }}>
          <div className="text-pink-300 text-2xl opacity-60">💕</div>
        </div>
        <div className="absolute animate-bounce" style={{ top: '55%', right: '15%', animationDelay: '1s' }}>
          <div className="text-pink-400 text-xl opacity-70">💖</div>
        </div>
        
        {/* Bottom area decorations */}
        <div className="absolute animate-pulse" style={{ bottom: '20%', left: '25%', animationDelay: '2s' }}>
          <div className="text-pink-300 text-xl opacity-50">🦋</div>
        </div>
        <div className="absolute animate-bounce" style={{ bottom: '30%', right: '25%', animationDelay: '3s' }}>
          <Heart className="text-pink-400 w-5 h-5 opacity-60" />
        </div>
        
        {/* Additional floating hearts */}
        <div className="absolute animate-float" style={{ top: '35%', left: '5%', animationDelay: '1.5s' }}>
          <div className="text-pink-300 text-lg opacity-50">💝</div>
        </div>
        <div className="absolute animate-float" style={{ top: '65%', right: '10%', animationDelay: '2.5s' }}>
          <div className="text-pink-400 text-lg opacity-60">🌟</div>
        </div>
      </div>

      {/* Special birthday message overlay */}
      <div className="fixed top-1/2 left-4 transform -rotate-90 origin-center text-pink-300 text-xs font-medium opacity-60 pointer-events-none hidden sm:block">
        Happy Birthday October 12th! 🎂
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