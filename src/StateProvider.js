import React, { createContext, useContext, useReducer } from 'react';

// Prepare data layer
export const StateContext = createContext();

// Enclose app in this -> all components get access to data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Used to provide access to data
export const useStateValue = () => useContext(StateContext);