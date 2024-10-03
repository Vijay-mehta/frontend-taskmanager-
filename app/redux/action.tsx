import { LOGIN } from "./actionType"

export const userLogin=(user:any)=>{
    return{
        type:LOGIN,
        payload:user
    }
}