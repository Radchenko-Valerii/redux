import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './counter';


const initialState ={ 
  count: 0,
  value: 1
}

function reducer(state=initialState, action){
  switch(action.type){
    case 'increment': {
      const newState={
        ...state,
        count: state.count + state.value
      }
      return newState;
    }
    case 'decrement': {
      const newState={
        ...state,
        count: state.count - state.value
      }
    return newState;
  }
  case 'changeValue': {
    const newState={
      ...state,
      value: action.value
    }
    return newState;
}

    default: return state;
  }
  
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  );
}

export default App;
