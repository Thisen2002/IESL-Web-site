
import { useState } from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { AnimatedSection,fadeInUp } from '../../Animations/Fading';

const events = [
  {
    id: 1,
    title: "Workshop on Sustainable Engineering",
    description: "Join us for an interactive workshop focusing on sustainable engineering practices and green technologies.",
    icon: "🔧"
  },
  {
    id: 2,
    title: "Annual Technical Symposium",
    description: "Our flagship event bringing together industry experts, researchers, and students to share knowledge.",
    icon: "🎓"
  },
  {
    id: 3,
    title: "Industry Visit Program",
    description: "Exclusive visits to leading engineering companies and manufacturing facilities in the region.",
    icon: "🏭"
  },
  {
    id: 4,
    title: "Career Development Seminar",
    description: "Professional development sessions to enhance your career prospects and networking opportunities.",
    icon: "💼"
  },
  {
    id: 5,
    title: "Innovation Competition",
    description: "Showcase your innovative solutions and compete with fellow engineers for exciting prizes.",
    icon: "🏆"
  }
];

export default function UpdatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % events.length
    );
  };

  const visibleEvents = events
    .slice(currentIndex, currentIndex + visibleCount)
    .concat(
      currentIndex + visibleCount > events.length
        ? events.slice(0, (currentIndex + visibleCount) % events.length)
        : []
    );

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontWeight: 700,
              color: '#1e293b',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Latest Updates
          </Typography>
        </AnimatedSection>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: `repeat(${Math.min(visibleCount, visibleEvents.length)}, 1fr)`,
              },
              gap: 4,
              px: { xs: 0, md: 6 },
            }}
          >
            {visibleEvents.map((event, index) => (
              <AnimatedSection key={event.id} variant={fadeInUp}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      height: '300px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography sx={{ fontSize: '3rem', mb: 1 }}>
                        {event.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, color: '#1e293b', mb: 2 }}
                      >
                        {event.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748b',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 3,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </Box>

          {/* --- Left Arrow --- */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            sx={{
              position: 'absolute',
              top: '50%',
              left: -20,
              transform: 'translateY(-50%)',
              width: '50px',
              height: '100%',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.button
              onClick={handlePrev}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
              whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowBack sx={{ color: '#64748b' }} />
            </motion.button>
          </Box>

          {/* --- Right Arrow --- */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            sx={{
              position: 'absolute',
              top: '50%',
              right: -20,
              transform: 'translateY(-50%)',
              width: '50px',
              height: '100%',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.button
              onClick={handleNext}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
              whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowForward sx={{ color: '#64748b' }} />
            </motion.button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}