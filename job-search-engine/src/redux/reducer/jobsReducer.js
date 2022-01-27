import { initialState } from "../store";
import {GET_JOB_OFFERS, GET_JOB_OFFERS_ERROR, GET_INPUT_VALUE, GET_LIMIT} from '../actions'

const jobsReducer =(state = initialState.jobOffers, action)=> {
    switch(action.type){
        case GET_JOB_OFFERS:
           return{
                ...state,
                jobs: action.payload
           }
        case GET_JOB_OFFERS_ERROR:
            return{
                ...state,
                isError: action.payload

            }
        case GET_INPUT_VALUE:
            return{
                ...state,
                inputValue: state.jobOffers.inputValue
            }  
        case GET_LIMIT:
            return{
                ...state,
                limit: state.jobOffers.limit
            }    
            
        default:
            return state
    }
}

export default jobsReducer
