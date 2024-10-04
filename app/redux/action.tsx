import { LOGIN_REQUEST } from "./actionType"

export const userLogin=(user:any)=>{
    return{
        type:LOGIN_REQUEST,
        payload:user
    }
}