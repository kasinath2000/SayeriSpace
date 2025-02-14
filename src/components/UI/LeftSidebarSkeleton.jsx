import { Box, Skeleton, Stack } from '@mui/material';

const LeftSidebarSkeleton = () => {
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
      <Skeleton variant="text" width="60%" height={30} />
      <Stack spacing={1} direction="row" flexWrap="wrap" gap={1} mt={2}>
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} variant="rounded" width={80} height={32} />
        ))}
      </Stack>
    </Box>
  );
};

export default LeftSidebarSkeleton;
