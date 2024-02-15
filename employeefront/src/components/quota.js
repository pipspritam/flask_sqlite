import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Quota() {
  
  const totalSize = 1000;
  const usedSize = 700;
  const availableSize = totalSize - usedSize;
  const usedPercentage = Math.round((usedSize / totalSize) * 100);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="body1">Available: {availableSize} MB</Typography>
      <Typography variant="body1">Total: {totalSize} MB</Typography>
      <Typography variant="body1">Used: {usedSize} MB</Typography>
      <Box display="flex" alignItems="center">
        <LinearProgress
          variant="determinate"
          value={(usedSize / totalSize) * 100}
          style={{ marginTop: '10px', height: '10px', width: '80%' }} 
        />
        <Typography variant="body2" color="textSecondary" style={{ marginLeft: '5px' }}>{usedSize} MB</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>{usedPercentage}% Used</Typography>
    </Paper>
  );
}
