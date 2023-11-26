const initialState = {
    value: 0
};

export const counterReducer = (state = initialState, action) => {
 switch (action.type) {
    case 'counter/increment': 
        return {
            ...state, 
         value: state.value + 1
        }
    case 'counter/decrement': 
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