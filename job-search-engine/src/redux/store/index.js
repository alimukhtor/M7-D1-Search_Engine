import {createStore} from 'redux'
import jobReducer from '../reducer'

export const initialState = {
    favoriteJobs:{
        favorites: [],
        isError: false
    }
}

let configStore = createStore(
    jobReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  export default configStore