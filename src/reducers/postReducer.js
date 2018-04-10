
import { SELECT_DRIVER } from '../actions/types';

const initialState = {
//   items: [],
  selectedDriver: {},
  message : "",
  isModalShown : false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_DRIVER:
        console.log("action.payload from reducer = " + JSON.stringify(action.payload));
        state = {
            selectedDriver: action.payload,
            message : "",
            isModalShown : true
        }
      return state; 
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    default:
    console.log("action.payload default = " + JSON.stringify(action.payload));
      return state;
  }
}
