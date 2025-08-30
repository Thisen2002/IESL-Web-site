import React, { useState } from "react";
import { 
  Container, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Modal, 
  Chip,
  IconButton
} from "@mui/material";
import { Close as CloseIcon, GitHub, Launch } from "@mui/icons-material";

// Theme colors
const theme = {
  skyBlue: "#87ceeb",
  white: "#ffffff", 
  darkBlue: "#003366"
};

// TypeScript interface for project data
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  category: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Campus Management System",
    description: "A comprehensive digital platform for managing university resources and student services.",
    fullDescription: "The Smart Campus Management System is a full-stack web application designed to streamline university operations. It includes modules for student registration, course management, faculty coordination, resource booking, and real-time analytics. The system features a modern responsive design, role-based access control, and integration with existing university databases. Built with scalability in mind, it can handle thousands of concurrent users while maintaining optimal performance.",
    image: "https://via.placeholder.com/400x250/87ceeb/ffffff?text=Smart+Campus",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    githubUrl: "https://github.com/iesl-uop/smart-campus",
    demoUrl: "https://smart-campus-demo.iesl-uop.edu",
    category: "Web Development",
    status: "Completed"
  },
  {
    id: 2,
    title: "IoT Environmental Monitoring",
    description: "Real-time environmental data collection and analysis system using IoT sensors.",
    fullDescription: "This project involves developing an IoT-based environmental monitoring system that collects real-time data on air quality, temperature, humidity, and noise levels across the university campus. The system uses Arduino-based sensors, wireless communication protocols, and cloud computing for data processing. It features automated alerts, historical data analysis, and predictive modeling for environmental trends. The web dashboard provides interactive visualizations and downloadable reports for research purposes.",
    image: "https://via.placeholder.com/400x250/003366/ffffff?text=IoT+Monitor",
    technologies: ["Arduino", "Python", "Flask", "InfluxDB", "Grafana"],
    githubUrl: "https://github.com/iesl-uop/iot-monitoring",
    demoUrl: "https://env-monitor.iesl-uop.edu",
    category: "IoT & Embedded",
    status: "In Progress"
  },
  {
    id: 3,
    title: "AI-Powered Learning Assistant",
    description: "Machine learning chatbot for personalized student learning support.",
    fullDescription: "An intelligent learning assistant powered by natural language processing and machine learning algorithms. The system analyzes student queries, learning patterns, and academic performance to provide personalized recommendations and instant support. It includes features like automated question answering, study plan generation, progress tracking, and integration with learning management systems. The AI model is trained on educational content and continuously improves through user interactions.",
    image: "https://via.placeholder.com/400x250/87ceeb/003366?text=AI+Assistant",
    technologies: ["Python", "TensorFlow", "NLP", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/iesl-uop/ai-learning-assistant",
    demoUrl: "https://ai-assistant.iesl-uop.edu",
    category: "AI & Machine Learning",
    status: "Completed"
  },
  {
    id: 4,
    title: "Mobile Event Management App",
    description: "Cross-platform mobile application for university event organization and participation.",
    fullDescription: "A comprehensive mobile application designed to streamline event management within the university ecosystem. Students and faculty can discover events, register for participation, receive notifications, and provide feedback. Event organizers can create and manage events, track attendance, and analyze engagement metrics. The app features QR code scanning for quick check-ins, social sharing capabilities, calendar integration, and offline functionality for areas with poor connectivity.",
    image: "https://via.placeholder.com/400x250/ffffff/87ceeb?text=Event+App",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
    githubUrl: "https://github.com/iesl-uop/event-management-app",
    demoUrl: "https://play.google.com/store/apps/iesl-events",
    category: "Mobile Development",
    status: "In Progress"
  },
  {
    id: 5,
    title: "Blockchain Student Records",
    description: "Secure and tamper-proof academic record management using blockchain technology.",
    fullDescription: "A blockchain-based system for managing academic records and certificates with enhanced security and verification capabilities. The platform ensures immutable storage of student achievements, degrees, and certifications while providing instant verification for employers and institutions. Smart contracts automate the certification process, reduce administrative overhead, and eliminate fraudulent credentials. The system includes a user-friendly interface for students to access their records and for institutions to issue verified credentials.",
    image: "https://via.placeholder.com/400x250/003366/87ceeb?text=Blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
    githubUrl: "https://github.com/iesl-uop/blockchain-records",
    demoUrl: "https://records.iesl-uop.edu",
    category: "Blockchain",
    status: "Research Phase"
  },
  {
    id: 6,
    title: "Virtual Lab Simulator",
    description: "3D virtual laboratory environment for remote engineering experiments.",
    fullDescription: "An immersive virtual laboratory platform that enables students to conduct engineering experiments remotely. The simulator provides realistic 3D environments for physics, chemistry, and engineering labs with accurate physics simulations. Students can manipulate virtual equipment, observe real-time results, and collaborate with peers in shared virtual spaces. The platform includes guided tutorials, assessment tools, and performance analytics to enhance the learning experience while reducing the need for physical lab resources.",
    image: "https://via.placeholder.com/400x250/87ceeb/003366?text=Virtual+Lab",
    technologies: ["Unity3D", "C#", "WebGL", "MySQL", "Socket.io"],
    githubUrl: "https://github.com/iesl-uop/virtual-lab",
    demoUrl: "https://lab-simulator.iesl-uop.edu",
    category: "VR/AR",
    status: "Completed"
  }
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <Box sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 2 }}>
    <Card
      sx={{
        height: '100%',
        background: `linear-gradient(135deg, ${theme.white}, ${theme.skyBlue}20)`,
        border: `1px solid ${theme.skyBlue}40`,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 30px ${theme.skyBlue}30`,
          border: `1px solid ${theme.skyBlue}`,
        }
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Chip 
            label={project.category} 
            size="small" 
            sx={{ 
              backgroundColor: theme.skyBlue, 
              color: theme.white,
              fontSize: '0.7rem'
            }} 
          />
          <Chip 
            label={project.status} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderColor: project.status === 'Completed' ? '#4caf50' : 
                          project.status === 'In Progress' ? '#ff9800' : '#9e9e9e',
              color: project.status === 'Completed' ? '#4caf50' : 
                     project.status === 'In Progress' ? '#ff9800' : '#9e9e9e',
              fontSize: '0.7rem'
            }} 
          />
        </Box>
        
        <Typography variant="h6" sx={{ 
          color: theme.darkBlue, 
          fontWeight: 600, 
          mb: 1,
          lineHeight: 1.3
        }}>
          {project.title}
        </Typography>
        
        <Typography variant="body2" sx={{ 
          color: '#666', 
          mb: 2,
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Chip 
              key={index}
              label={tech} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.65rem', height: '24px' }}
            />
          ))}
          {project.technologies.length > 3 && (
            <Chip 
              label={`+${project.technologies.length - 3}`} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.65rem', height: '24px' }}
            />
          )}
        </Box>
        
        <Button 
          variant="contained" 
          fullWidth
          sx={{ 
            backgroundColor: theme.skyBlue,
            '&:hover': { backgroundColor: theme.darkBlue },
            textTransform: 'none',
            fontWeight: 500
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  </Box>
);

const ProjectModal = ({ project, open, onClose }: { 
  project: Project | null; 
  open: boolean; 
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '80%', md: '70%' },
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto',
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 0,
      }}>
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2, borderBottom: '1px solid #e0e0e0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ color: theme.darkBlue, fontWeight: 600 }}>
              {project.title}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        
        <Box sx={{ p: 3 }}>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              marginBottom: '24px'
            }}
          />
          
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Chip 
              label={project.category} 
              sx={{ backgroundColor: theme.skyBlue, color: theme.white }} 
            />
            <Chip 
              label={project.status} 
              variant="outlined"
              sx={{ 
                borderColor: project.status === 'Completed' ? '#4caf50' : 
                            project.status === 'In Progress' ? '#ff9800' : '#9e9e9e',
                color: project.status === 'Completed' ? '#4caf50' : 
                       project.status === 'In Progress' ? '#ff9800' : '#9e9e9e'
              }} 
            />
          </Box>
          
          <Typography variant="body1" sx={{ 
            color: '#555', 
            lineHeight: 1.7,
            mb: 3
          }}>
            {project.fullDescription}
          </Typography>
          
          <Typography variant="h6" sx={{ color: theme.darkBlue, mb: 2 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.technologies.map((tech, index) => (
              <Chip 
                key={index}
                label={tech} 
                variant="outlined"
                sx={{ fontSize: '0.8rem' }}
              />
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<GitHub />}
              href={project.githubUrl}
              target="_blank"
              sx={{ 
                backgroundColor: theme.darkBlue,
                '&:hover': { backgroundColor: '#001a33' },
                textTransform: 'none'
              }}
            >
              View Code
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<Launch />}
              href={project.demoUrl}
              target="_blank"
              sx={{ 
                borderColor: theme.skyBlue,
                color: theme.skyBlue,
                '&:hover': { 
                  borderColor: theme.darkBlue,
                  color: theme.darkBlue 
                },
                textTransform: 'none'
              }}
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{
      backgroundColor: theme.white,
      minHeight: '100vh',
      py: 4
    }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{
          textAlign: 'center',
          color: theme.darkBlue,
          fontWeight: 700,
          mb: 2
        }}>
          Our Projects
        </Typography>
        
        <Typography variant="body1" sx={{
          textAlign: 'center',
          color: theme.darkBlue,
          mb: 6,
          maxWidth: 600,
          mx: 'auto',
          lineHeight: 1.6
        }}>
          Explore our innovative projects spanning across various domains of engineering and technology.
          Click on any project to learn more about its implementation and impact.
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          margin: '-16px' 
        }}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </Box>
      </Container>
      
      <ProjectModal 
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default Projects;
