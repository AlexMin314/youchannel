/* Duck pattern
import { createAction, handleActions } from 'redux-actions';
import { getExample } from '../API/ExampleAPI';

// actions
export const ADD_Example = 'ADD_Example'


// Action Creator
export const addExample = createAction(ADD_Example);


const initialState = getExample();

export default handleActions({
    ADD_Example: (state, action) => {
      console.log(state, action)
        return [...state, action.payload]
    },

}, initialState);
*/

/*
import {  } from '';
const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case :
      return ;
    default:
      return state;
  }
};

export default reducer;
*/
