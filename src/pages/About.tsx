import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";

// Theme colors
const theme = {
  skyBlue: "#87ceeb",
  white: "#ffffff", 
  darkBlue: "#003366",
  lightBlue: "#e3f2fd"
};

// TypeScript interface for member data
interface Person {
  name: string;
  post: string;
  image: string;
}

// President data
const president: Person = {
  name: "G.A.Y.Savinda",
  post: "President",
  image: "https://via.placeholder.com/150x150/87ceeb/ffffff?text=President"
};

const executiveCommittee: Person[] = [
  {
    name: "S.M.B.G.Janakantha",
    post: "Vice President",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=VP"
  },
  {
    name: "Viduni Gunasekara",
    post: "Secretary",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=SEC"
  },
  {
    name: "Thathsarani Liyanage",
    post: "Joint Secretary",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=JS"
  },
  {
    name: "Sansala Edirisinghe",
    post: "Treasurer",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=TREA"
  },
  {
    name: "Sanduni Jayani",
    post: "Joint Treasurer",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=JT"
  },
  {
    name: "Christenal Pathirana",
    post: "Executive Committee",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=EC"
  },
  {
    name: "Pawani De Silva",
    post: "Executive Committee",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=EC"
  },
  {
    name: "Dulara Senadheera",
    post: "Executive Committee",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=EC"
  },
  {
    name: "Miyuru Jayawardana",
    post: "Executive Committee",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=EC"
  },
  {
    name: "Shaminda Thilakarathne",
    post: "Executive Committee",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=EC"
  },
  {
    name: "Kavindra Cowan",
    post: "Vice Chairman",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=VC"
  },
  {
    name: "Anushka Sewwandi",
    post: "Vice Secretary",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=VS"
  },
  {
    name: "Devindi Oshanda",
    post: "Joint Treasurer",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=JT"
  },
  {
    name: "Dineth Ransara",
    post: "Chief Organizer",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=CO"
  },
  {
    name: "Chathura Madhusanka",
    post: "Editor",
    image: "https://via.placeholder.com/120x120/87ceeb/ffffff?text=ED"
  }
];

const MemberCard = ({ person }: { person: Person }) => (
  <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center',
    p: 2,
    m: 1
  }}>
    <Avatar
      src={person.image}
      alt={person.name}
      sx={{
        width: 80,
        height: 80,
        mb: 1,
        border: `3px solid ${theme.skyBlue}`
      }}
    />
    <Typography variant="subtitle2" sx={{ 
      fontWeight: 600, 
      color: theme.darkBlue,
      fontSize: '0.9rem',
      lineHeight: 1.2,
      mb: 0.5
    }}>
      {person.name}
    </Typography>
    <Typography variant="caption" sx={{ 
      color: '#666',
      fontSize: '0.75rem'
    }}>
      {person.post}
    </Typography>
  </Box>
);

const AboutUs: React.FC = () => {
  return (
    <Box>
      {/* About Us Section */}
      <Box sx={{ backgroundColor: theme.white, py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{
                color: theme.darkBlue,
                fontWeight: 700,
                mb: 3
              }}>
                About Us
              </Typography>
              
              <Typography variant="body1" sx={{
                color: '#555',
                lineHeight: 1.8,
                mb: 2
              }}>
                Welcome to the IESL Student Chapter at the University of Peradeniya! 
                We're a dedicated community of aspiring engineers working together to 
                foster innovation, skill-building, and leadership.
              </Typography>
              
              <Typography variant="body1" sx={{
                color: '#555',
                lineHeight: 1.8
              }}>
                Our events and initiatives aim to empower students both technically 
                and professionally in the field of engineering, creating opportunities 
                for growth, networking, and real-world application of engineering principles.
              </Typography>
            </Box>
            
            <Box sx={{ minWidth: 200 }}>
              <img 
                src="/Images/IESL.png" 
                alt="IESL Logo" 
                style={{ 
                  width: '100%', 
                  maxWidth: '200px', 
                  height: 'auto' 
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Meet Our Team Section */}
      <Box sx={{ backgroundColor: theme.lightBlue, py: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{
            textAlign: 'center',
            color: theme.darkBlue,
            fontWeight: 600,
            mb: 4
          }}>
            Meet Our Team
          </Typography>
          
          {/* President */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Avatar
              src={president.image}
              alt={president.name}
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
                border: `4px solid ${theme.skyBlue}`
              }}
            />
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: theme.darkBlue,
              mb: 0.5
            }}>
              {president.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              {president.post}
            </Typography>
          </Box>

          {/* Executive Committee */}
          <Typography variant="h5" sx={{
            textAlign: 'center',
            color: theme.darkBlue,
            fontWeight: 600,
            mb: 3
          }}>
            Executive Committee
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '1000px',
            mx: 'auto'
          }}>
            {executiveCommittee.map((person, index) => (
              <MemberCard key={index} person={person} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;