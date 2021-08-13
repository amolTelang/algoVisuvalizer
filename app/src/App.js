import React from 'react'
import './App.css';

//redux
import {Provider} from 'react-redux';
import store from './store';

//components
import Array from './components/Array'

const App=()=>{
  return(
  <Provider store={store}>
   
       <Array/>
   
  </Provider>
  )
}

export default App;
