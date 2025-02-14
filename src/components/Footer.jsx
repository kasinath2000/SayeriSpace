import { Card, CardContent, Typography, Link } from '@mui/material';

const FooterCard = () => {
  return (
    <Card 
      sx={{ 
        bgcolor: '#3E4E42', 
        color: 'white', 
        p: 2, 
        border: '2px solid #4CAF50', 
        borderRadius: '16px',
        textAlign: 'center',
        // width: '70%',
        // height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center' 
      }}
    >
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '.8rem' , color:"#A9B5DF" }}>
          © {new Date().getFullYear()} SayeriSpace. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '.7rem' ,color:"#A9B5DF"}}>
          Developed by{' '}
          <Link 
            href="https://github.com/kasinath2000" 
            color="inherit" 
            underline="hover"
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ fontSize: '.8rem' }}
          >
            Kasinath M.
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FooterCard;
