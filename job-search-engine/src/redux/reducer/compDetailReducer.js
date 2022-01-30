import { initialState } from "../store";
import { GET_COMPANY_DETAIL } from "../actions";

const compDetailReducer =(state = initialState.companyDetails, action)=> {
    switch(action.type){
        case GET_COMPANY_DETAIL:
            return{
                ...state,
                detail:[state.detail, action.payload],
            }
        default:
            return state    
    }
}

export default compDetailReducer