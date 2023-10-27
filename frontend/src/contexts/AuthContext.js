import {createContext,useReducer} from 'react';

export const AuthContext = createContext();


export const AuthReducer = (state,action)=>{
    switch (action.type) {
        case 'LOG_IN':
            return {
                user:action.payload
            } 
        case 'LOG_OUT':
            return {
                user:null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({children})=>{
    
    const [state,dispatch] =useReducer(AuthReducer,{
        user: JSON.parse(localStorage.getItem('user'))
    })

    console.log(state);
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}