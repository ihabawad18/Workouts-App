import { useState } from "react";
import { useFetchWorkouts } from "../hooks/useFetchWorkouts";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSnackbar } from "notistack";
const WorkoutForm = () => {
    const {fetchWorkouts} = useFetchWorkouts();
    const {enqueueSnackbar} = useSnackbar();
    const [workoutform,setworkoutForm] = useState({title:'',load:'',reps:''});
    const [error,setError] = useState(null);
    const [emptyFields,setEmptyFields] = useState([]);
    const {user} = useAuthContext();
    const handleFormSubmit= async (e)=>{
        e.preventDefault();

        if(!user){
            setError("You must be logged in!");
            return ;
        }

        const response = await fetch("http://localhost:4000/api/v1/workouts",
            {
                method: "POST",
                body:JSON.stringify(workoutform),
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${user.token}`
                }       
            }
        )
        const json = await response.json();
        if(!response.ok){
            setEmptyFields(json.emptyFields);
            setError(json.error);
        }
        if(response.ok){
            setEmptyFields([]);
            enqueueSnackbar('Workout created successfully',{variant:'success'});
            setError(null);
            fetchWorkouts();
            setworkoutForm({title:'',load:'',reps:''})
        }
    }

    return ( 
        <form className="workout-form" onSubmit={handleFormSubmit}>
            <h3>Add a new Workout</h3>
             <div className="element-container">
                <label>Exercise Title:</label>    
                <input
                    value={workoutform.title}
                    type="text"
                    onChange={(e)=>{
                        workoutform.title=setworkoutForm({...workoutform,title:e.target.value});
                    }}
                    className={emptyFields&&emptyFields.includes('title')?'error':''}
                />
             </div>
             <div className="element-container">
                <label>Load in (Kg):</label>
                <input
                    value={workoutform.load}
                    inputMode="numeric"
                    onChange={(e)=>{
                        workoutform.title=setworkoutForm({...workoutform,load:e.target.value});
                    }}
                    className={emptyFields&&emptyFields.includes('load')?'error':''}
                />
             </div>
             <div className="element-container">
                <label>Number of Reps:</label>    
                <input
                    value={workoutform.reps}
                    inputMode="numeric"
                    onChange={(e)=>{
                        workoutform.title=setworkoutForm({...workoutform,reps:e.target.value});
                    }}
                    className={emptyFields&&emptyFields.includes('reps')?'error':''}
                />
             </div>

             <button>Add Workout</button>
             {error && <div className="error">{error}</div>}
        </form>           
     );
}
 
export default WorkoutForm;