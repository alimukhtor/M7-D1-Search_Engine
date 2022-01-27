
// *********** ACTION CREATORS ******************

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS"
export const SET_ERROR = "SET_ERROR"
export const GET_JOB_OFFERS = "GET_JOB_OFFERS"

export const addToFavoritesWithThunk =(job)=> {
    return (dispatch, getState)=> {
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: job
        })
    }
}

export const removeFromFavsWithThunk =(index)=> {
    return (dispatch)=> {
        dispatch({
            type: REMOVE_FROM_FAVS,
            payload: index

        })
    }
}
  