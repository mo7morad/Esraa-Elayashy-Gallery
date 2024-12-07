// Utility functions for handling birthday celebration sounds

// Audio instance for birthday music
let birthdayMusic: HTMLAudioElement | null = null;

export const initBirthdayMusic = () => {
  if (typeof window !== 'undefined' && !birthdayMusic) {
    birthdayMusic = new Audio('/sounds/happy-birthday.mp3');
    birthdayMusic.loop = true;
  }
};

export const playBirthdayMusic = () => {
  if (birthdayMusic) {
    birthdayMusic.volume = 0.8; // Set a comfortable default volume
    birthdayMusic.play().catch((error) => {
      console.error('Error playing birthday music:', error);
    });
  }
};

export const stopBirthdayMusic = () => {
  if (birthdayMusic) {
    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;
  }
};

export const setBirthdayMusicVolume = (volume: number) => {
  if (birthdayMusic) {
    birthdayMusic.volume = Math.max(0, Math.min(1, volume));
  }
};
