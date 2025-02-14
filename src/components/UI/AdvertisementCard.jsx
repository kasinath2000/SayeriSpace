import { Card, CardMedia } from '@mui/material';
import Advertisement from "../../assets/SayeriSpace-bg.png"
const AdvertisementCard = () => {
  return (
    <Card 
      sx={{ 
        bgcolor: '#3E4E42',
        borderRadius: '16px',
        width: '70%',
        height: '250px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        overflow: 'hidden',                  // Ensures the image corners match the card radius
      }}
    >
      <CardMedia
        component="img"
        // height="800"
        height={100}
        image= {Advertisement}  // Replace with your image URL
        alt="Advertisement"
      />
    </Card>
  );
};

export default AdvertisementCard;
