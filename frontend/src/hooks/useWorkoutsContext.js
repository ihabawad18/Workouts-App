import {useContext} from 'react';
import { WorkoutsContext } from '../contexts/WorkoutContext';

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('cant use Workoutcontext');
    }

    return context;
}