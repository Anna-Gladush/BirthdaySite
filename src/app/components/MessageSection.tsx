import { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import exampleImage1 from 'figma:asset/67e896513275fe9addad668fd569ccf0f0bd45df.png';
import { toast } from 'sonner@2.0.3';

interface MessageSectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function MessageSection({ onNext, onPrevious }: MessageSectionProps) {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${exampleImage1})` }}
    >
      <div className="max-w-2xl w-full text-center">
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
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Want to send me a sweet message? Click below to leave your thoughts!
        </p>

        {/* Message form card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 mb-8">
          <div className="space-y-6">
            <Textarea
              placeholder="Write your sweet message here... 💕"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-32 border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-xl resize-none"
            />
            
            <Button
              onClick={handleSubmitMessage}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
              disabled={isSubmitted}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitted ? "Message Sent! 💕" : "Send a Message"}
            </Button>

            {isSubmitted && (
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 animate-fadeIn">
                <p className="text-pink-600 italic">
                  Your message has been received in my heart! Thank you for making my birthday extra special! 💖
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute animate-bounce" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>
          <Heart className="text-pink-300 w-6 h-6 opacity-60" />
        </div>
        <div className="absolute animate-bounce" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>
          <div className="text-pink-400 text-xl opacity-70">💕</div>
        </div>
        <div className="absolute animate-bounce" style={{ top: '70%', left: '20%', animationDelay: '2s' }}>
          <div className="text-pink-300 text-lg opacity-50">💖</div>
        </div>
        <div className="absolute animate-bounce" style={{ bottom: '15%', right: '25%', animationDelay: '3s' }}>
          <Heart className="text-pink-400 w-5 h-5 opacity-60" />
        </div>
      </div>
    </div>
  );
}