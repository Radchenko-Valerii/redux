import React from 'react';
import {connect} from 'react-redux'


const Counter = (props) => {
  const {count, dispatch} = props;

  const increment =()=>{
    const action = {
      type: 'increment'
    };
    dispatch(action);
  }

  const decrement =()=>{
    const action = {
      type: 'decrement'
    }
    dispatch(action)
  }

  const changeValue = (e)=>{
    console.log(e.target.value)
    const action = {
      type: 'changeValue', 
      value: Number(e.target.value)
    }
    dispatch(action)
  }



  return (
    <div>
      <h1>Count: {count}</h1>
      <input onChange={changeValue} type="text" />
      <button onClick={increment}>add</button>
      <button onClick={decrement}>remove</button>
    </div>
  );
}

function mapStateToProps (state){
  return {
    count: state.count
  };
}



export default connect(mapStateToProps)(Counter);
