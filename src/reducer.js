// initial state of data layer
export const initialState = {
    user: null
};

// Dispatch actions to data layer
export const actionTypes = {
    SET_USER: "SET_USER"
};

// Event listener
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state, // current state
                user: action.user // user info
            };

            default:
                return state;
    }
};

export default reducer;