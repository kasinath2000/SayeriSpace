


// import { Card as MuiCard, CardContent, Typography, Button, Stack } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import ShareIcon from '@mui/icons-material/Share';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const Cards = ({ text }) => {
//   const handleCopy = () => {
//     navigator.clipboard.writeText(text);
//     alert('Copied to clipboard!');
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: 'Shared Sayeri',
//           text: text,
//         })
//         .catch((error) => console.error('Error sharing:', error));
//     } else {
//       alert('Sharing not supported in this browser.');
//     }
//   };

//   const handleWhatsApp = () => {
//     const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <MuiCard sx={{ maxWidth: 400, margin: 'auto', backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)', borderRadius: 3 }}>
//       <CardContent>
//         <Typography variant="body1" color="textPrimary" mb={2}>
//           {text}
//         </Typography>
//         <Stack direction="row" spacing={1} justifyContent="space-between">
//           <Button variant="contained" color="primary" onClick={handleCopy} startIcon={<ContentCopyIcon />}>
//             Copy
//           </Button>
//           <Button variant="contained" color="success" onClick={handleShare} startIcon={<ShareIcon />}>
//             Share
//           </Button>
//           <Button variant="contained" sx={{ backgroundColor: '#25D366' }} onClick={handleWhatsApp} startIcon={<WhatsAppIcon />}>
//             WhatsApp
//           </Button>
//         </Stack>
//       </CardContent>
//     </MuiCard>
//   );
// };

// export default Cards;


import { Card as MuiCard, CardContent, Typography, IconButton, Stack } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Cards = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Shared Sayeri',
          text: text,
        })
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing not supported in this browser.');
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <MuiCard
      sx={{
        maxWidth: 500,
        margin: 'auto',
        backgroundColor: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)',
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography variant="body1" color="textPrimary" mb={2}>
          {text}
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <IconButton color="primary" onClick={handleCopy}>
            <ContentCopyIcon />
          </IconButton>
          <IconButton color="success" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#25D366' }}
            onClick={handleWhatsApp}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Cards;
