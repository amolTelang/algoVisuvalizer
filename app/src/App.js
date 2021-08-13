import React from 'react'
import './App.css';

//redux
import {Provider} from 'react-redux';
import store from './store';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//components
import Array from './components/Array'
import Bar from './components/bars/Bar'

const App=({array,colorKey})=>{
  const bars=array.map((value,index)=>(
    <Bar key={index}
    index={index}
    length={value}
    color={colorKey}/>
  ))
  return(
  <Provider store={store}>
   
      <Array/>
      {bars}
   
  </Provider>
  )
}
App.propTypes={
  array:PropTypes.array,
}

const mapStateToProps=state=>{
  return{
    array:state.array,
    colorKey:state.colorKey,
  }
}
export default connect(mapStateToProps,null)(App);
