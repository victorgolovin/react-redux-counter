import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT
} from './constants';


const initialState = {
    value: 0
};

export const counterReducer = (state = initialState, action) => {
 switch (action.type) {
    case COUNTER_INCREMENT: 
        return {
            ...state, 
         value: state.value + 1
        }
        
    case COUNTER_DECREMENT: 
        return {
            ...state, 
         value: state.value - 1
        }
         
    default:
        return {
            ...state
        }
 }
}