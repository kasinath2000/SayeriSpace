// import { useState } from "react";
// import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
// import logo from '../../public/SayeriSpace_white.png';
// import ContactPopover from './UI/ContactPopover'; // Import the new component

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backdropFilter: "blur(16px)", backgroundColor: "#497D74", boxShadow: 1 }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
//         {/* Logo */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//           <img src={logo} alt="SayeriSpace Logo" className="h-8 w-8" />
//           <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
//             SayeriSpace
//           </Typography>
//         </Box>

//         {/* Contact Chip */}
//         <Chip 
//           label="Contact Us" 
//           clickable 
//           sx={{ 
//             bgcolor: '#4CAF50', 
//             color: 'white', 
//             fontWeight: 'bold', 
//             '&:hover': { bgcolor: '#45A049' }, 
//             borderRadius: '8px',
//             px: 2,
//             py: 0.75,
//             ml: 2  // Added left margin for spacing
//           }} 
//           onClick={handleClick} 
//         />

//         {/* Popover Component */}
//         <ContactPopover anchorEl={anchorEl} handleClose={handleClose} />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
import logo from '../../public/SayeriSpace_white.png';
import ContactPopover from './UI/ContactPopover';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backdropFilter: "blur(16px)", backgroundColor: "#497D74", boxShadow: 1 }}>
      <Toolbar>
        {/* Wrapper Box inside Toolbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: 5 }}>
          
          {/* Left side: Logo with left margin */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 2 }}>
            <img src={logo} alt="SayeriSpace Logo" className="h-8 w-8" />
            <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
              SayeriSpace
            </Typography>
          </Box>

          {/* Right side: Contact Us Chip with right margin */}
          <Chip 
            label="Contact Us" 
            clickable 
            sx={{ 
              bgcolor: '#4CAF50', 
              color: 'white', 
              fontWeight: 'bold', 
              '&:hover': { bgcolor: '#45A049' }, 
              borderRadius: '8px',
              px: 2,
              py: 0.75,
              mr: 2  // Right margin added
            }} 
            onClick={handleClick} 
          />

        </Box>

        {/* Popover Component */}
        <ContactPopover anchorEl={anchorEl} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
