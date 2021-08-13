import { GENERATE_RANDOM_ARRAY } from "./types";

//generate random no
const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
   

}
//generate random array
export const generate=(count)=>dispatch=>{      
        const temp=[];
        for(let i=0;i<count;i++){
            // temp.push(Math.floor(Math.random()*50)+200);
            temp.push(generateRandomNumber(50,200))
        }
 console.log(temp);
 dispatch({
     type:GENERATE_RANDOM_ARRAY,
     payload:temp
 })
}