

import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-[#B2A5FF]/50 shadow-md text-white p-4 text-center fixed bottom-0 w-full">
      <Typography variant="body2">
        © {new Date().getFullYear()} SayeriSpace Website. All rights reserved.
      </Typography>
      
    </footer>
  );
};

export default Footer;

