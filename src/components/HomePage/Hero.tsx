import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@mui/material";

export default function HeroSection() {
  const images = [
    '../Images/Home_page_slideShow/1.jpg',
    '../Images/Home_page_slideShow/2.jpg',
    '../Images/Home_page_slideShow/3.jpg',
    '../Images/Home_page_slideShow/4.jpg',
    '../Images/Home_page_slideShow/5.jpg',
    '../Images/Home_page_slideShow/6.jpg',
    '../Images/Home_page_slideShow/7.jpg',
    '../Images/Home_page_slideShow/8.jpg',
    '../Images/Home_page_slideShow/9.jpg',
    '../Images/Home_page_slideShow/10.jpg'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Increased interval to 5 seconds for better viewing
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Hero slide ${current + 1}`}
            className="object-cover w-full h-full absolute inset-0"
            initial={{ 
              opacity: 0,
              scale: 1.1,
            }}
            animate={{ 
              opacity: 0.7,
              scale: 1,
            }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 1.2 },
              scale: { duration: 1.8 }
            }}
          />
        </AnimatePresence>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}>
          IESL Student Chapter - University of Peradeniya
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.8 }}>
          Empowering Tomorrow's Engineers
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1.1, duration: 0.6 }}>
          <Button 
            className="text-lg px-6 py-3"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
              },
            }}
          >
            Join Us
          </Button>
        </motion.div>
        
        {/* Slideshow indicators */}
        <motion.div 
          className="absolute bottom-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};