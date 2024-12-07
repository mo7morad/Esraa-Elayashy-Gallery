'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';
import {
  initBirthdayMusic,
  playBirthdayMusic,
  stopBirthdayMusic,
  setBirthdayMusicVolume,
} from '@/utils/birthday-sounds';

export const BirthdayCelebration = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [audioInitialized, setAudioInitialized] = useState(false);

  // Initialize audio on first user interaction
  const initializeAudio = () => {
    if (!audioInitialized) {
      initBirthdayMusic();
      playBirthdayMusic();
      setBirthdayMusicVolume(0.5);
      setAudioInitialized(true);
    }
  };

  useEffect(() => {
    if (isVisible) {
      // Create multiple confetti bursts
      const runConfetti = () => {
        const count = 200;
        const defaults = {
          origin: { y: 0.7 },
          spread: 360,
          ticks: 100,
          gravity: 0.8,
          decay: 0.94,
          startVelocity: 30,
        };

        function fire(particleRatio: number, opts: any) {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
          });
        }

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
          colors: ['#ff0000', '#ffd700', '#ff69b4'],
        });

        fire(0.2, {
          spread: 60,
          colors: ['#00ff00', '#0099ff', '#ff1493'],
        });

        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
          colors: ['#ff9999', '#99ff99', '#9999ff'],
        });

        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
          colors: ['#ff44ff', '#44ffff', '#ffff44'],
        });
      };

      runConfetti();
      const confettiInterval = setInterval(runConfetti, 4000);

      return () => {
        stopBirthdayMusic();
        clearInterval(confettiInterval);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-[95vw] h-[95vh] md:w-[85vw] md:h-[85vh] lg:w-[75vw] lg:h-[85vh] bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
            >
              <X className="w-6 h-6 text-pink-600" />
            </button>

            {/* Content Container */}
            <div 
              className="h-full w-full p-4 md:p-6 lg:p-8 overflow-hidden flex flex-col" 
              onClick={initializeAudio}
            >
              {/* Floating Hearts Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl md:text-2xl"
                    initial={{
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      scale: 0,
                    }}
                    animate={{
                      x: [
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                      ],
                      y: [
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                      ],
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {["❤️", "🎂", "🎈", "✨", "🎉"][Math.floor(Math.random() * 5)]}
                  </motion.div>
                ))}
              </div>

              {/* Main Content */}
              <div className="relative z-10 h-full flex flex-col space-y-4 md:space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-center flex-shrink-0"
                >
                  <span className="inline-block px-4 md:px-6 py-2 bg-pink-500/20 rounded-full text-lg md:text-xl font-semibold text-pink-700">
                    🎉 Special Day 🎉
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-center text-pink-600 flex-shrink-0"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  Happy Birthday! 🎂
                </motion.h1>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 min-h-0 bg-white/30 rounded-xl p-4 md:p-6 backdrop-blur-sm overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent"
                >
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-lg lg:text-xl text-right text-pink-900 font-arabic leading-relaxed" dir="rtl">
                      في يوم ميلادك، أحب أقولك إن وجودك في حياتي هو أكبر هدية لي. أنتِ نجمتي المضيئة، وابتسامتك أجمل ما يزين أيامي.
                    </p>

                    <p className="text-base md:text-lg lg:text-xl text-pink-800 leading-relaxed">
                      May your days be filled with as much joy, love, and light as you bring into my life.
                    </p>

                    <p className="text-base md:text-lg lg:text-xl text-right text-pink-900 font-arabic leading-relaxed" dir="rtl">
                      أنتِ كل الأشياء الحلوة مجتمعة، وكل يوم معك هو عيد بالنسبة لي.
                    </p>

                    <p className="text-base md:text-lg lg:text-xl text-pink-800 leading-relaxed">
                      Thank you for being the amazing person you are.
                    </p>

                    <p className="text-base md:text-lg lg:text-xl text-right text-pink-900 font-arabic leading-relaxed" dir="rtl">
                      أنا محظوظ إنك في حياتي، وأتمنى ليكي سنة مليانة سعادة وأمان وكل حاجة بتحلمي بيها. 💖✨
                    </p>

                    <div className="mt-4 md:mt-6 p-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-lg">
                      <p className="text-base md:text-lg lg:text-xl text-right text-pink-900 font-arabic leading-relaxed" dir="rtl">
                        كل عامٍ وأنتِ قمرٌ يتوهج في سماء العمر،<br/>
                        نورُكِ يملأ القلب ويُضيء الدرب، يا أجمل من كل الزهر.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {!audioInitialized && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="text-center flex-shrink-0"
                  >
                    <p className="inline-block px-4 md:px-6 py-2 md:py-3 bg-pink-500/20 rounded-full text-base md:text-lg text-pink-700">
                      🎵 Click anywhere to play birthday music! 🎵
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
