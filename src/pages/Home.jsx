

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import LeftSidebar from '../components/PageContent/LeftSidebar';
import CenterContent from '../components/PageContent/CenterComponent';
import RightSidebar from '../components/PageContent/RightSidebar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sayeris, setSayeris] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSayeris = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbzVyHHitecYbFTyVqKgUHWl8Gj7xXMcKeFzjLSZCEDYSCzr3rMPh0yYukprM0hylTcZEQ/exec'
        );
        const data = response.data.data || [];
        setSayeris(data);
        setCategories([...new Set(data.map((item) => item.catagory))]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setSayeris([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSayeris();
  }, []);

  return (
    <Box display="flex" minHeight="100vh">
      <LeftSidebar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        loading={loading} 

      />
      <CenterContent 
        sayeris={sayeris} 
        selectedCategory={selectedCategory} 
        loading={loading} 
      />
      <RightSidebar />
    </Box>
  );
};

export default Home;
