// Utility functions for handling birthday celebration sounds

// Audio instance for birthday music
let birthdayMusic: HTMLAudioElement | null = null;

export const initBirthdayMusic = async () => {
  if (typeof window !== 'undefined' && !birthdayMusic) {
    birthdayMusic = new Audio('/sounds/happy-israa.mp3');
    birthdayMusic.loop = false;
    birthdayMusic.volume = 1.0; // Full volume
    
    // Pre-load the audio
    try {
      await birthdayMusic.load();
    } catch (error) {
      console.error('Failed to load birthday music:', error);
    }
  }
};

export const playBirthdayMusic = async () => {
  if (birthdayMusic) {
    try {
      // Try to play with user interaction requirement workaround
      const playPromise = birthdayMusic.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch (error) {
      console.error('Error playing birthday music:', error);
      // Fallback: try to play on next user interaction
      const playOnInteraction = () => {
        birthdayMusic?.play();
        window.removeEventListener('click', playOnInteraction);
      };
      window.addEventListener('click', playOnInteraction);
    }
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
