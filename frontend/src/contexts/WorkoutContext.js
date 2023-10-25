import {createContext,useReducer} from 'react';

export const WorkoutsContext = createContext();


export const workoutsReducer = (state,action)=>{
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                ...state,workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                ...state,workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
               ...state,workouts:state.workouts.filter((el)=>el._id!==action.payload)     
            }
        case 'REMOVE_ALL':
            return {
                ...state,workouts:null
            }
        default:
            return state;
    }
}

export const WorkoutContextProvider = ({children})=>{
    
    const [state,dispatch] =useReducer(workoutsReducer,{
        workouts: []
    })

    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}