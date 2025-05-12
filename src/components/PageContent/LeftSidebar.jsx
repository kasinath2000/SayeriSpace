
import { Box, Typography, Stack } from '@mui/material';
import CustomChip from '../UI/Chips';
import LeftSidebarSkeleton from '../UI/LeftSidebarSkeleton';

const LeftSidebar = ({ categories, selectedCategory, setSelectedCategory, loading }) => {
  if (loading) return <LeftSidebarSkeleton />;

  return (
    <Box
      width={{ xs: '100%', md: '30%' }}
      p={4}
      bgcolor="#2C3930"
      color="white"
      position="sticky"
      top={0}
      height="100vh"
      overflow="auto"
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Categories
      </Typography>
      <Stack spacing={1} direction="row" flexWrap="wrap" gap={1}>
        {categories.map((category, index) => (
          <CustomChip
            key={index}
            label={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LeftSidebar;
