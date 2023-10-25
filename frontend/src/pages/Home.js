import {useEffect} from 'react';
import Workout from '../components/Wourkout';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useFetchWorkouts } from '../hooks/useFetchWorkouts';
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {
    const {workouts} = useWorkoutsContext();
    const {isLoading,error,fetchWorkouts} = useFetchWorkouts(); 
    const {user} = useAuthContext();
    useEffect(
      ()=>{
        if(user){
            fetchWorkouts();
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <div className="home">
            {error && <div className="error">{error}</div>}
            <div className="workouts">
                {isLoading && <div className="loading">Loading....</div>}
                {workouts.length===0 && (<div className="no_workouts">
                    You have no workouts please add some by submitting the form!
                </div>)}
                {workouts && workouts.map((workout)=>(
                    <Workout workout={workout} key={workout._id}/>    
                ))
                }
            </div>
            <WorkoutForm/>
        </div> 
    );
}
export default Home;