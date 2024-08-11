import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <Box id="experience" >
      <div className="skills-container">
      <h1>Experience</h1>
      </div>
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: '#5000ca', mr: 2 }}>
              <WorkIcon />
            </Avatar>
            <Box>
              <Typography variant="h6">Web Development Intern</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Eshway, Remote | Jan 2024 – Mar 2024
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1.5 }}>
                During my internship at Eshway, I engineered their dashboard using Next.js, focusing on performance optimization and sleek design with Tailwind CSS. I implemented dynamic routing for efficient data fetching and deployed the application on AWS EC2, ensuring scalability. Collaborating with a cross-functional team, we created a responsive, user-friendly experience that improved both performance and satisfaction. Leveraging Git for version control, the development efficiency increased by 40%, and load times reduced by 25%.
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                <strong>Tech Stack:</strong> Next.js, Node.js, Tailwind.CSS, ShadCN, Git, Figma, AWS.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Experience;
