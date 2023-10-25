import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";
export const useLogout = () =>{
    const {dispatch} = useAuthContext();
    const {dispatch:workoutsDispatch} = useWorkoutsContext();
    const logout = ()=>{
        localStorage.removeItem('user');

        dispatch({type:'LOG_OUT'});

        workoutsDispatch({type:'REMOVE_ALL'});
    }

    return {logout};
}