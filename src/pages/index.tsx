import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Stars } from 'lucide-react';

const LikeReasons = () => {
  const reasons = [
    "How you always know how to make me laugh",
    "The cute way you scrunch your nose",
    "The way you always listen to me and understand me",
    "The way you care about your friends and family",
    "Your hugs that make everything better",
    "The way you squint your eyes when you can't see",
    "How you always know how to make me feel happy",
    "How you keep me on my toes and surprise me",
    "Your eyes that I always lose myself in",
  ];

  const [currentReason, setCurrentReason] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  const showNextReason = () => {
    setIsAnimating(true);
    setShowSparkle(true);
    setTimeout(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length);
      setIsAnimating(false);
    }, 300);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 p-4">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse top-1/4 left-1/4"/>
        <div className="absolute w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse top-3/4 right-1/4"/>
      </div>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen max-w-2xl mx-auto">
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Reasons Why I Like You (Sonal) SOOOOO MUCH
          </h1>
          <p className="text-gray-600 italic">Every reason comes from my heart ❤️</p>
        </div>

        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl transform rotate-1 opacity-50"/>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90 border border-pink-100">
            <div className={`transition-all duration-300 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <p className="text-2xl text-center text-gray-800 font-medium leading-relaxed">
                {reasons[currentReason]}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 relative">
          {showSparkle && (
            <div className="absolute -inset-4">
              <Sparkles className="absolute text-yellow-400 animate-spin-slow" size={24} style={{top: '-1rem', left: '-1rem'}}/>
              <Stars className="absolute text-pink-400 animate-spin-slow" size={24} style={{bottom: '-1rem', right: '-1rem'}}/>
            </div>
          )}
          <button
            onClick={showNextReason}
            className="transform transition-all duration-300 hover:scale-110 focus:outline-none active:scale-95"
          >
            <Heart
              size={56}
              className="text-pink-500 hover:text-pink-600 filter hover:drop-shadow-lg"
              fill="currentColor"
            />
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 font-medium">
            <span className="text-pink-500">{currentReason + 1}</span> / {reasons.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeReasons;