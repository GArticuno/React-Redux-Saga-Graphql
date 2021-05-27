import React from 'react';
import { Provider } from 'react-redux';
import CharacterList from './components/CharacterList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Warpper from './components/Warpper';
import store from './store';

function App(){
  return(
    <Warpper>
      <Header/>
      <Provider store={store}>
        <CharacterList/>  
      </Provider>
      <Footer/>
    </Warpper>

  );
};

export default App;
