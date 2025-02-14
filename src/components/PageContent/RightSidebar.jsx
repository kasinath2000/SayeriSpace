import { Box, Stack } from '@mui/material';
import FooterCard from '../Footer'; 
import AdvertisementCard from '../UI/AdvertisementCard';  // Import new Advertisement component

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
      display={{ xs: 'none', md: 'flex' }}
      flexDirection="column"        // Stack vertically
      alignItems="center"
      justifyContent="space-between" // Space between cards
    >
      <Stack spacing={4} width="100%" alignItems="center">  {/* Vertical stack with spacing */}
        <AdvertisementCard />       {/* New Advertisement Card */}
        <FooterCard />              {/* Existing Footer Card */}
      </Stack>
    </Box>
  );
};

export default RightSidebar;
