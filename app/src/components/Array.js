import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//actions
import {generate} from '../actions/genRanArray';

const Array=({count,generate})=>{

    const onClick=(e)=>{
        console.log(count);
        console.log('count displayed');
        generate(10)
    }
    return(
        <button type="button" onClick={onClick}>Click Me!</button> 
    )
}

Array.propTypes={
    count:PropTypes.number,
}


const mapStateToProps = (state) =>{ return{
    count: state.count
  };
};

export default connect(mapStateToProps,{generate})(Array);