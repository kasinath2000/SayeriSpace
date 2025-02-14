import { Box, Skeleton, Stack } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <Stack spacing={2}>
      {[...Array(5)].map((_, index) => (
        <Box key={index} p={2} bgcolor="white" borderRadius={2} boxShadow={1}>
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="90%" height={20} />
        </Box>
      ))}
    </Stack>
  );
};

export default SkeletonLoader;
