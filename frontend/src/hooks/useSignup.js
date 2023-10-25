import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () =>{
    const [error,setError] = useState(null);
    const [isLoading,setisLoading] = useState(null);
    const {dispatch} = useAuthContext();
    const signup = async (email , password) =>{
        setisLoading(true);
        setError(null);
        const response = await fetch('http://localhost:4000/api/v1/user/signup',{
            method: "POST",
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify({email,password})
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setisLoading(false);
        }

        if(response.ok){
            // save to local storage
            localStorage.setItem('user',JSON.stringify(json));
            
            //update auth context
            dispatch({type:'LOG_IN',payload:json});

            setisLoading(false);
        }

    }

    return {signup,isLoading,error};

}