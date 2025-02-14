import { Popover, Box, Typography, IconButton } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';

const ContactPopover = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'contact-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box p={2} sx={{ minWidth: '250px', bgcolor: '#2C3930', color: 'white' }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>Contact Info</Typography>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Phone sx={{ color: '#4CAF50' }} fontSize="small" />
          <Typography variant="body2">+1 234 567 890</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Email sx={{ color: '#4CAF50' }} fontSize="small" />
          <Typography variant="body2">contact@sayerispace.com</Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold" gutterBottom>Follow Us</Typography>
        <Box display="flex" gap={1.5}>
          <IconButton sx={{ bgcolor: '#0077b5', color: 'white', '&:hover': { bgcolor: '#005582' } }} href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: '#333', color: 'white', '&:hover': { bgcolor: '#222' } }} href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: '#1DA1F2', color: 'white', '&:hover': { bgcolor: '#0d8ddb' } }} href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton sx={{ bgcolor: '#E1306C', color: 'white', '&:hover': { bgcolor: '#C13584' } }} href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Popover>
  );
};

export default ContactPopover;
