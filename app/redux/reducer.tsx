import { LOGIN_REQUEST } from "./actionType"

const initialState={
    users:[]
}

const userReducer=(state=initialState,action:any)=>{
    console.log(action)
switch(action.type){
     case LOGIN_REQUEST :return {...state,user:action.payload}
}
}

export default userReducer