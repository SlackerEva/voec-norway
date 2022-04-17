import './App.css';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import ShopsList from '../ShopsList/ShopsList';
import Footer from '../Footer/Footer';
import Filters from '../Filters/Filters';
import api from '../../utils/api.js';
import { Container } from '@mui/material';

function App() {

  const [shops, setShops] = useState([]);
  const [countries, setСountries] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    api.getInitialCards()    
      .then((items)=>{
        console.log(items);
        setShops(items);
      })
      .catch((err)=>{
        console.log(err);
      })

    api.getСountries()    
      .then((items)=>{
        console.log(items);
        setСountries(items);
      })
      .catch((err)=>{
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <Header handleFilters={() => setIsFiltersOpen(true)} />
      <Container 
        maxWidth="xl"
        sx={{mt: "1rem"}}
      >
        <ShopsList shops={shops} />
      </Container>
      <Filters filtersOpen={isFiltersOpen} filtersClose={() => setIsFiltersOpen(false)} countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
