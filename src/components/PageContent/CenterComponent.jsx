


import { Box, Typography, Stack } from '@mui/material';
import Card from '../UI/Cards';
import SkeletonLoader from '../UI/SkeletonLoader';

const CenterContent = ({ sayeris, selectedCategory, loading }) => {
  return (
    <Box
      width={{ xs: '100%', md: '40%' }}
      p={4}
      bgcolor="#497D74"
      overflow="auto" // This is the ONLY scrollable section
      height="100vh"
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2} color="white">
        Sayeri Descriptions
      </Typography>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <Stack spacing={2}>
          {sayeris
            .filter((s) => !selectedCategory || s.catagory === selectedCategory)
            .map((sayeri, index) => (
              <Card key={index} text={sayeri.description} />
            ))}
        </Stack>
      )}
    </Box>
  );
};

export default CenterContent;
