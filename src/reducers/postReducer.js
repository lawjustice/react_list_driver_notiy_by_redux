
import {
  SELECT_DRIVER,
  UPDATE_DRIVER,
  LOAD_DRIVER
} from '../actions/types';

const initialState = {
//   items: [],
  selectedDriver: {},
  message : "",
  isModalShown : false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_DRIVER:
      return {
        ...state,
        drivers: action.payload
      }
    case SELECT_DRIVER:
        console.log("action.payload from reducer = " + JSON.stringify(action.payload));
        return {
          ...state,
          selectedDriver: action.payload,
          isModalShown: true
        }
      //   state = {
      //       selectedDriver: {
      //         drivers: state.drivers,
      //         ...action.payload
      //       },
      //       message : "",
      //       isModalShown : true
      //   }
      // return state;
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    case UPDATE_DRIVER:
      let newList = state.drivers
      state.drivers.map((item, index) => {
        if (item.id === action.payload.id) {
          newList[index].suspended = 1
        }
      })
      let newState = {
        ...state,
       drivers: newList
      }
      console.log(newState)
      return newState
    default:
    console.log("action.payload default = " + JSON.stringify(action.payload));
      return state;
  }
}
