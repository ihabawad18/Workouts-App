import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSnackbar } from 'notistack';
const Workout = ({workout}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();
    const deleteWorkout = async () =>{

        if(!user){
            return ;
        }
        const response = await fetch('http://localhost:4000/api/v1/workouts/'+workout._id,{
            method: 'DELETE',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        if(response.ok){
            enqueueSnackbar('Workout deleted successfully',{variant:'success'});
            dispatch({type:'DELETE_WORKOUT',payload:workout._id});
        }
    }
    return ( 
        <div className="workout">
            <h4>{workout.title}</h4>
            <p>Load(Kg): {workout.load}</p>
            <p>Number of Reps: {workout.reps}</p>
            <div>{formatDistanceToNow(workout.createdAt,{addSuffix:true})} </div>
            <span onClick={deleteWorkout}>
                <FontAwesomeIcon className='trash-icon' icon={faTrash} />
            </span>
        </div>
     );
}
 
export default Workout;