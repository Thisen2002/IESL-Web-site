import { useState, useRef } from 'react';
import { Container, Box, Typography, Card } from "@mui/material";
import { motion, useInView } from 'framer-motion';
import { 
  CalendarToday, 
  LocationOn, 
  People, 
  Engineering,
  School,
  Business,
  EmojiEvents
} from "@mui/icons-material";
import { fadeInUp,AnimatedSection } from '../Animations/Fading';

// Theme colors
const theme = {
  skyBlue: "#87ceeb",
  white: "#ffffff", 
  darkBlue: "#003366",
  lightBlue: "#e3f2fd",
  mediumBlue: "#1565c0",
  softGrayBlue: "#37474f"
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};


// Events data
const events = [
  {
    id: 1,
    title: "Engineering Innovation Challenge 2025",
    description: "A platform to showcase your innovative engineering ideas and compete with peers from across the island. Present your solutions to real-world problems.",
    date: "March 15, 2025",
    datetime: "2025-03-15",
    location: "Engineering Faculty Auditorium",
    category: { title: "Competition", icon: EmojiEvents, color: "#f59e0b" },
    participants: "200+ Students",
    type: "upcoming"
  },
  {
    id: 2,
    title: "Industry Networking Night",
    description: "Connect with industry leaders, alumni, and professionals. An excellent opportunity to expand your network and learn about career opportunities.",
    date: "February 28, 2025",
    datetime: "2025-02-28",
    location: "University Main Hall",
    category: { title: "Networking", icon: Business, color: "#3b82f6" },
    participants: "150+ Professionals",
    type: "upcoming"
  },
  {
    id: 3,
    title: "AI & Machine Learning Workshop",
    description: "Learn the fundamentals of AI and ML with hands-on experience. From basic concepts to practical implementations in engineering projects.",
    date: "January 20, 2025",
    datetime: "2025-01-20",
    location: "Computer Lab Complex",
    category: { title: "Workshop", icon: School, color: "#10b981" },
    participants: "80+ Participants",
    type: "past"
  },
  {
    id: 4,
    title: "Sustainability in Engineering Summit",
    description: "Explore sustainable engineering practices and green technologies. Join discussions on building a more sustainable future through engineering.",
    date: "December 10, 2024",
    datetime: "2024-12-10",
    location: "Faculty Conference Room",
    category: { title: "Conference", icon: Engineering, color: "#8b5cf6" },
    participants: "120+ Attendees",
    type: "past"
  },
];

const stats = [
  { name: 'Events This Year', value: '25+', icon: CalendarToday },
  { name: 'Total Participants', value: '1000+', icon: People },
  { name: 'Industry Partners', value: '15+', icon: Business },
  { name: 'Awards Won', value: '8', icon: EmojiEvents },
];

const HeroSection = () => (
  <Box sx={{
    position: 'relative',
    py: { xs: 12, md: 16 },
    px: { xs: 2, md: 4 },
    backgroundColor: theme.lightBlue, // solid light blue
    color: theme.darkBlue,
    overflow: 'hidden',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
  }}>
    <Container maxWidth="lg" sx={{ 
      position: 'relative', 
      zIndex: 1,
      backgroundColor: theme.white,
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      p: 4
    }}>
      <AnimatedSection>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3rem', lg: '4rem' },
            fontWeight: 'bold',
            mb: 2,
            textAlign: 'center',
            color: theme.darkBlue,
            letterSpacing: '-0.02em',
          }}
        >
          EVENTS
        </Typography>
      </AnimatedSection>
      
      <AnimatedSection variant={fadeInUp}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            color: '#1a237e',
            fontWeight: 400,
            mb: 2
          }}
        >
          Welcome to the Events hub of the IESL Student Chapter at the University of Peradeniya! 
          Discover our vibrant calendar of technical workshops, industry networking sessions, 
          competitions, and innovative programs designed to empower the next generation of engineers.
        </Typography>
      </AnimatedSection>
    </Container>
  </Box>
);

const StatsSection = () => (
  <Box sx={{ 
    py: { xs: 8, md: 10 }, 
    px: { xs: 2, md: 4 },
    backgroundColor: theme.skyBlue, // solid sky blue
  }}>
    <Container maxWidth="lg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
          gap: 4 
        }}>
          {stats.map((stat) => (
            <motion.div key={stat.name} variants={fadeInUp}>
              <Card sx={{ 
                p: 4, 
                textAlign: 'center',
                backgroundColor: theme.white,
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(13, 71, 161, 0.15)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }}>
                <stat.icon sx={{ 
                  fontSize: 48, 
                  color: theme.mediumBlue, 
                  mb: 2 
                }} />
                <Typography variant="h3" sx={{ 
                  fontWeight: 700, 
                  color: theme.mediumBlue,
                  mb: 1 
                }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: theme.softGrayBlue,
                  fontWeight: 500 
                }}>
                  {stat.name}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  </Box>
);

const EventsSection = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 }, 
      px: { xs: 2, md: 4 },
      background: theme.white,
    }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              fontWeight: 700,
              color: theme.mediumBlue,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Our Events
          </Typography>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2, 
            mb: 8,
            flexWrap: 'wrap'
          }}>
            {['all', 'upcoming', 'past'].map((filterType) => (
              <motion.div
                key={filterType}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component="button"
                  onClick={() => setFilter(filterType as any)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    border: 'none',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    backgroundColor: filter === filterType 
                      ? '#3b82f6'
                      : '#e3f2fd',
                    color: filter === filterType ? 'white' : '#3b82f6',
                    boxShadow: filter === filterType 
                      ? '0 4px 20px rgba(59, 130, 246, 0.3)' 
                      : 'none',
                  }}
                >
                  {filterType}
                </Box>
              </motion.div>
            ))}
          </Box>
        </AnimatedSection>

        {/* Events Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 4 
          }}>
            {filteredEvents.map((event) => (
              <motion.div key={event.id} variants={fadeInUp}>
                <Card sx={{ 
                  height: '100%',
                  backgroundColor: theme.white,
                  borderRadius: '10px',
                  border: `1px solid ${theme.lightBlue}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  mb: '1.5rem',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(13, 71, 161, 0.15)',
                  }
                }}>
                  {/* Event Icon Header */}
                  <Box sx={{ 
                    height: 200, 
                    backgroundColor: `${event.category.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <event.category.icon sx={{ 
                      fontSize: 80, 
                      color: event.category.color,
                      opacity: 0.7 
                    }} />
                    <Box sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: event.type === 'upcoming' ? '#10b981' : '#64748b',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'capitalize'
                    }}>
                      {event.type}
                    </Box>
                  </Box>

                  {/* Event Content */}
                  <Box sx={{ p: '1rem 1.25rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <CalendarToday sx={{ fontSize: 16, color: '#64748b' }} />
                      <Typography variant="body2" sx={{ color: '#64748b' }}>
                        {event.date}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600, 
                        color: theme.mediumBlue,
                        mb: 2,
                        lineHeight: 1.3
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.softGrayBlue,
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {event.description}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn sx={{ fontSize: 16, color: '#64748b' }} />
                        <Typography variant="body2" sx={{ color: '#64748b' }}>
                          {event.location}
                        </Typography>
                      </Box>
                      
                      <Box sx={{
                        backgroundColor: `${event.category.color}20`,
                        color: event.category.color,
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}>
                        {event.category.title}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                      <People sx={{ fontSize: 16, color: '#64748b' }} />
                      <Typography variant="body2" sx={{ color: '#64748b' }}>
                        {event.participants}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default function Events() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#f8fafc', // solid bg
    }}>
      <HeroSection />
      <StatsSection />
      <EventsSection />
    </Box>
  );
}
