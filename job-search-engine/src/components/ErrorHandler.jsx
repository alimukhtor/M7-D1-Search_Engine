import {connect} from 'react-redux'
const mapStateToProps =(state)=> ({
    isError: state.favoriteJobs.isError
})

const mapDispatchToProps =()=> ({
    setErrors: ()=> {
        dispatch({
            type: 'SET_ERROR',
            payload: "404"
        })
    } 

})
const ErrorHandler =()=> {
    return(
        <h1>404 not found!</h1>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler)