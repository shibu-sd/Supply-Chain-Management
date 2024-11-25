import React from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        About the Supply Chain App
      </Typography>
      <Typography variant="body1" paragraph>
        This Supply Chain App allows consumers to browse products, place orders, and manage their purchase process. Producers can add new products, manage their inventory, and oversee orders from customers. The app provides a simple and intuitive interface for both consumers and producers to streamline the supply chain process.
      </Typography>
      <hr></hr>
      <Typography variant="h6" gutterBottom>
        <h3><b>Group No 4 Members:</b></h3>
      </Typography>
      <List>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Mohit Kulhari (211020427)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Ravil Patel (211020437)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Sanchit Namdeo (211020443)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Sanskar Singh (211020445)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Shivaibhav Dewangan (211020448)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Shivam Kushwaha (211020449)</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default About;
