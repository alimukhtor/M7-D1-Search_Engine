import { initialState } from "../store";

const jobReducer =(state = initialState, action)=> {
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                favoriteJobs:{
                    ...state.favoriteJobs,
                    favorites:[...state.favoriteJobs.favorites, action.payload]
                }
            }
        default:
            return state
    }
}

export default jobReducer   