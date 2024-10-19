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
              <Typography variant="h6">DSW Core Student Council</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Vellore Institute of Technology, Bhopal
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1.5 }}>
              As a core member of the DSW Student Council, I managed and tracked various college events, ensuring everything ran smoothly. I coordinated with clubs, resolved issues, and oversaw event logistics, contributing to the success of student activities.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Experience;
