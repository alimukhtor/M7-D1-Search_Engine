import { initialState } from "../store";
import {GET_JOB_OFFERS} from '../actions'

const jobsReducer =(state = initialState.jobOffers, action)=> {
    switch(action.type){
       case GET_JOB_OFFERS:
           return{
                ...state,
                jobs: action.payload
           }
        default:
            return state
    }
}

export default jobsReducer
