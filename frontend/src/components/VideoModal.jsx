import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, RefreshCw } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Reset states when modal opens or URL changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setError(false);
    }
  }, [isOpen, videoUrl]);

  if (!isOpen) return null;

  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  // Helper to format YouTube URLs for embedding
  const getEmbedUrl = (url) => {
    if (url.includes('embed/')) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`
      : url;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden glass border-white/20 shadow-2xl z-10 bg-black"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-all border border-white/10"
          >
            <X size={24} />
          </button>

          {isLoading && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#020617]/60 backdrop-blur-sm">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white/60 font-medium">Loading Video...</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90 px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                <AlertCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Video Unreachable</h4>
              <p className="text-white/60 mb-6 max-w-sm">
                We couldn't load the video. This might be due to a network issue or an expired link.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setError(false);
                    setIsLoading(true);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold"
                >
                  <RefreshCw size={18} />
                  Try Again
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-all font-medium border border-white/10"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          {/* Video Player */}
          {isYouTube ? (
            <iframe
              className={`w-full h-full border-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              src={getEmbedUrl(videoUrl)}
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              className={`w-full h-full object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              controls
              autoPlay
              playsInline
              src={videoUrl}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setError(true);
              }}
            >
              Your browser does not support the video tag.
            </video>
          )}
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10 transition-opacity duration-500">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">AI CarrerHub Platform Overview</h3>
            <p className="text-white/60 text-sm md:text-lg">Experience the future of AI-powered career growth.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;

