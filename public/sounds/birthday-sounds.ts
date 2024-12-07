export const playBirthdaySounds = () => {
  const sounds = [
    new Audio('/sounds/birthday-music.mp3'),
    new Audio('/sounds/sparkle.mp3'),
  ];

  sounds.forEach(sound => {
    sound.volume = 0.5;
    sound.play().catch(e => console.log('Audio playback failed:', e));
  });

  return () => sounds.forEach(sound => sound.pause());
};
