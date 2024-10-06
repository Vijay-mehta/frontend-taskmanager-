import { LOGIN_REQUEST } from "./actionType"

const initialState={
    loading: false,
    user: null,
    error: null,
}

const userReducer=(state=initialState,action:any)=>{
    console.log("reduce",action)
switch(action.type){
     case LOGIN_REQUEST :return {...state,user:action.payload}
}
}

export default userReducer