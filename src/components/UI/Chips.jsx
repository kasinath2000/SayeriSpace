import Chip from '@mui/material/Chip';

const Chips = ({ label, isSelected, onClick }) => {
  return (
    <Chip
      label={label}
      onClick={onClick}
      variant={isSelected ? 'filled' : 'outlined'}
      sx={{
        backgroundColor: isSelected ? '#497D74' : 'transparent',
        color: isSelected ? 'white' : '#497D74',
        borderColor: '#497D74',
        '&:hover': { backgroundColor: '#497D74', color: 'white' },
      }}
    />
  );
};

export default Chips;
