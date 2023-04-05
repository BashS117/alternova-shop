import './App.css';
import React from 'react';
import Layout from './containers/Layout';
import AppContext from './context/AppContext';
import useInitialCart from './hooks/useInitialCart';

function App() {
const initialState= useInitialCart();

  return (
    <AppContext.Provider value ={initialState}> 
      

      
       <Layout/>


    </AppContext.Provider>


      
  );
}

export default App;
