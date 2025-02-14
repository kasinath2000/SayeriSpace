
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from '../../public/SayeriSpace_white.png';
const Navbar = () => {
  const navLinks = ["Home", "About", "Contact"];

  return (
    <AppBar position="static" sx={{ backdropFilter: "blur(16px)", backgroundColor: "#497D74", boxShadow: 1 }}>
      {/* <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyLogo
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((text) => (
            <Button key={text} color="inherit">
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar> */}
      <Toolbar className="flex justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="SayeriSpace Logo" className="h-8 w-8" />
        <Typography variant="h6" className="text-xl font-bold text-gray-300">
          SayeriSpace
        </Typography>
      </div>

      
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;
