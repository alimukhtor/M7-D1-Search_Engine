import { initialState } from "../store";
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVS, SET_ERROR} from '../actions'

const favJobsReducer =(state = initialState.favoriteJobs, action)=> {
    switch(action.type){
        case ADD_TO_FAVORITES:
            return{
                ...state,
                    favorites:[...state.favoriteJobs.favorites, action.payload]
                }
        case REMOVE_FROM_FAVS:
            return{
                ...state,
            
                    favorites: state.favoriteJobs.favorites.filter((fav, i)=> i !== action.payload)
                }
        case SET_ERROR:
            return{
                ...state,
            
                    isError: [state.favoriteJobs.isError, action.payload]
                }
        default:
            return state
    }
}

export default favJobsReducer   