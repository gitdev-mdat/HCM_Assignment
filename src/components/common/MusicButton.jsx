import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { playMusic } from "../../services/musicService";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!isPlaying) {
      console.log("Playing music...");
      playMusic();
      setIsPlaying(true);
    }
  };
  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        className={`
          w-16 h-16 rounded-lg border-2 border-gray-500 cursor-pointer
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out
          hover:bg-amber-400
          ${isPlaying ? "bg-black" : "bg-white/10"}
          text-white
          md:w-10 md:h-10 w-8 h-8
        `}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          // Pause icon
          <Volume2 className="text-gray-400" />
        ) : (
          // Play icon
          <VolumeX className="text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default MusicButton;
