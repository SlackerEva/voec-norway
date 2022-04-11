import './App.css';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import api from '../../utils/api.js';

function App() {

  const [shops, setShops] = useState([]);

  useEffect(() => {
    api.getInitialCards()    
      .then((items)=>{
        console.log(items);
        setShops(items)
      })
      .catch((err)=>{
        console.log(err);
      })
  }, []);


  return (
    <div className="App">
      <Header />
      <Body shops={shops} />
      <Footer />
    </div>
  );
}

export default App;
