// import { Box, Typography } from '@mui/material';

// const RightSidebar = () => {
//   return (
//     <Box
//       width="25%"
//       p={4}
//       bgcolor="#2C3930"
//       color="white"
//       position="sticky"
//       top={0}
//       height="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Typography variant="h6" fontWeight="bold">
//         Footer Content (Sticky)
//       </Typography>
//     </Box>
//   );
// };

// export default RightSidebar;


import { Box, Typography } from '@mui/material';

const RightSidebar = () => {
  return (
    <Box
      width="30%"
      p={4}
      bgcolor="#2C3930"
      color="white"
      position="sticky"
      top={0}
      height="100vh"
      display={{ xs: 'none', md: 'flex' }} // Hide on mobile, show on medium+ screens
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h6" fontWeight="bold">
        Footer Content (Sticky)
      </Typography>
    </Box>
  );
};

export default RightSidebar;
