// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Chip from '../components/UI/Chips';
// import Card from '../components/UI/Cards';

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [sayeris, setSayeris] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSayeris = async () => {
//       try {
//         const response = await axios.get(
//           'https://script.google.com/macros/s/AKfycbzVyHHitecYbFTyVqKgUHWl8Gj7xXMcKeFzjLSZCEDYSCzr3rMPh0yYukprM0hylTcZEQ/exec'
//         );
//         const data = response.data.data || [];
//         setSayeris(data);
//         const uniqueCategories = [...new Set(data.map((item) => item.catagory))];
//         setCategories(uniqueCategories);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setSayeris([]);
//         setLoading(false);
//       }
//     };
//     fetchSayeris();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
//       </div>
//     );

//   return (
//     <div className="flex w-full bg-gray-600 ">
//       {/* Left Sidebar - 33% width */}
//       <div className="w-1/3 p-4 h-screen bg-[#2C3930] text-white shadow-lg sticky">
//         <h2 className="text-lg font-semibold mb-4">Categories</h2>
//         <div className="flex flex-col gap-2">
//           {categories.map((category, index) => (
//             <Chip
//               key={index}
//               label={category}
//               isSelected={selectedCategory === category}
//               onClick={() => setSelectedCategory(category)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content - 67% width */}
//       <div className="w-2/3 p-4 bg-[#497D74] overflow-y-auto h-screen backdrop-blur-md shadow-lg">
//         <h2 className="text-xl font-bold text-center mb-4">Sayeri Descriptions</h2>
//         <div className="grid grid-cols-1 gap-4">
//           {sayeris
//             .filter((s) => !selectedCategory || s.catagory === selectedCategory)
//             .map((sayeri, index) => (
//               <Card key={index} text={sayeri.description} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;









// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, CircularProgress } from '@mui/material';
// import LeftSidebar from '../components/PageContent/LeftSidebar';
// import CenterContent from '../components/PageContent/CenterComponent';
// import RightSidebar from '../components/PageContent/RightSidebar';

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [sayeris, setSayeris] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSayeris = async () => {
//       try {
//         const response = await axios.get(
//           'https://script.google.com/macros/s/AKfycbzVyHHitecYbFTyVqKgUHWl8Gj7xXMcKeFzjLSZCEDYSCzr3rMPh0yYukprM0hylTcZEQ/exec'
//         );
//         const data = response.data.data || [];
//         setSayeris(data);
//         setCategories([...new Set(data.map((item) => item.catagory))]);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setSayeris([]);
//         setLoading(false);
//       }
//     };
//     fetchSayeris();
//   }, []);

//   if (loading)
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <CircularProgress color="primary" />
//       </Box>
//     );

//   return (
//     <Box display="flex" minHeight="100vh">
//       <LeftSidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//       <CenterContent sayeris={sayeris} selectedCategory={selectedCategory} />
//       <RightSidebar />
//     </Box>
//   );
// };

// export default Home;

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
