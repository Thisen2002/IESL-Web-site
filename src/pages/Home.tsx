import { Card, Container, Box, Typography } from "@mui/material";
import { motion} from 'framer-motion';
import { Engineering, Groups } from "@mui/icons-material";
import HeroSection from '../components/HomePage/Hero';
import {fadeInUp,fadeInRight,fadeInLeft,AnimatedSection} from '../Animations/Fading';
import UpdateSection from '../components/HomePage/UpdatesSection';

// Animated section wrapper component


const IeslIntro = () => (
  <Box sx={{ 
    py: { xs: 8, md: 12 }, 
    px: { xs: 2, md: 4 },
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
      zIndex: 0,
    }
  }}>
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <AnimatedSection>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            fontWeight: 700,
            color: '#1e293b',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          About Our Chapter
        </Typography>
      </AnimatedSection>
      
      <AnimatedSection variant={fadeInUp}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            lineHeight: 1.8,
            color: '#475569',
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            fontWeight: 400,
          }}
        >
          The IESL Student Chapter of the University of Peradeniya is a leading chapter under the Institution of Engineers, Sri Lanka (IESL). 
          It connects engineering undergraduates with industry professionals, providing exposure beyond academics. 
          Through workshops, competitions, and community service projects, the chapter promotes technical excellence, leadership, and social responsibility.
        </Typography>
      </AnimatedSection>
    </Container>
  </Box>
);

const VisionMission = () => (
  <Box sx={{ 
    py: { xs: 8, md: 12 }, 
    px: { xs: 2, md: 4 },
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
  }}>
    <Container maxWidth="lg">
      <AnimatedSection>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 8, 
            fontWeight: 700,
            color: '#1e293b',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Our Vision & Mission
        </Typography>
      </AnimatedSection>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: 6,
        maxWidth: '1000px',
        mx: 'auto'
      }}>
        <AnimatedSection variant={fadeInLeft}>
          <Card sx={{ 
            p: 4, 
            height: '100%',
            background: 'linear-gradient(135deg, #71a5f8ff 0%, #557cfaff 100%)',
            color: 'white',
            borderRadius: 3,
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Engineering sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Vision
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              To inspire and empower engineering students to become future leaders who drive innovation and uphold the highest standards of professionalism.
            </Typography>
          </Card>
        </AnimatedSection>

        <AnimatedSection variant={fadeInRight}>
          <Card sx={{ 
            p: 4, 
            height: '100%',
            background: 'linear-gradient(135deg, #8df7d3ff 0%, #4cf8c2ff 100%)',
            color: 'white',
            borderRadius: 3,
            boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)',
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Groups sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Mission
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              To create a dynamic platform for professional growth through knowledge sharing, technical events, industry exposure, and community engagement.
            </Typography>
          </Card>
        </AnimatedSection>
      </Box>
    </Container>
  </Box>
);

const CallToAction = () => (
  <Box sx={{ 
    py: { xs: 8, md: 12 }, 
    px: { xs: 2, md: 4 },
    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      zIndex: 0,
    }
  }}>
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
      <AnimatedSection>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 3, 
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Ready to Join Us?
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 4, 
            opacity: 0.9,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            lineHeight: 1.6
          }}
        >
          Become part of a community that's shaping the future of engineering. 
          Connect, learn, and grow with us.
        </Typography>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Box
            component="button"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#3b82f6',
              background: 'white',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 30px rgba(255, 255, 255, 0.4)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Join Our Chapter
          </Box>
        </motion.div>
      </AnimatedSection>
    </Container>
  </Box>
);

export default function Home() {
  return (
    <Box sx={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      // background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh'
    }}>
      <HeroSection />
      <IeslIntro />
      <VisionMission />
      <UpdateSection />
      <CallToAction />
    </Box>
  );
}
