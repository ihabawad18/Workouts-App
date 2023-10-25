import { useState } from "react";
import { useWorkoutsContext } from "./useWorkoutsContext";
import { useAuthContext } from "./useAuthContext";

export const useFetchWorkouts = ()=>{
    const {dispatch} = useWorkoutsContext();
    const [error,setError] = useState(null);
    const [isLoading,setisLoading] = useState(false);
    const {user} = useAuthContext();

    const fetchWorkouts = async () =>{
        setisLoading(true);
        setError(null);
        const response = await fetch("http://localhost:4000/api/v1/workouts",
            {
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            }
        );
        const json = await response.json();
        if(response.ok){
            setisLoading(false);
            dispatch({type:'SET_WORKOUTS',payload:json});
            console.log(json);
        }
        if(!response.ok){
            setError(json.error);
            setisLoading(false);
        }
    }
    
    return {fetchWorkouts,error,isLoading};
   
}