import music from "../assets/pm.mp3";

export const playMusic = () => {
  const audio = new Audio(music);
  audio.play();
};

export const pauseMusic = () => {
  const audio = new Audio(music);
  audio.pause();
  audio.currentTime = 0;
};
