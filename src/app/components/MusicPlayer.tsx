import { useState } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface MusicPlayerProps {
  className?: string;
}

export function MusicPlayer({ className = "" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed top-4 right-4 z-50 ${className}`}>
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
  );
}