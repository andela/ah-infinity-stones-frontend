import { RECEIVE_INCREMENT } from '../actions/actionTypes';

const initialState = {
    count: 0
  };
  
  export default (state = initialState, action) => {
    switch (action.type){
        case RECEIVE_INCREMENT:
            return { 
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
  } 
