
//types
import { GENERATE_RANDOM_ARRAY } from "../actions/types";

const initialState={
    array:[],
    arraySteps:[],
    colorKey:[],
    colorSteps:[],
    currentSteps:0,
    count:10,
    delay:100,
    algorithm:'',
    timeouts:[],
};




//reducer
function stateReducer(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case GENERATE_RANDOM_ARRAY:
            return state;
        default:return state;
        
    }
}


export default stateReducer;