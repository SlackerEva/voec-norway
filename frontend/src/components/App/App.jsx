import './App.css';
import React, {useState, useEffect} from 'react';
import Header from '../Header.jsx';
import ShopsList from '../ShopsList';
import Footer from '../Footer';
import Filters from '../Filters';
import api from '../../utils/api.js';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addShops } from '../../store/shopSlice';

function App() {

  const dispatch = useDispatch();
  const [countries, setСountries] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    api.getInitialCards()    
      .then((shops) => {
        console.log(shops);
        dispatch(addShops({shops}));
      })
      .catch((err)=>{
        console.log(err);
      })

    api.getСountries()    
      .then((items)=>{
        //console.log(items);
        setСountries(        
          items.map((item) => {
            return {
              code: item.slice(0, 2),
              country: item.slice(5)
            }
          }));
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
        <ShopsList />
      </Container>
      <Filters filtersOpen={isFiltersOpen} filtersClose={() => setIsFiltersOpen(false)} countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
