import { ListGroup } from 'react-bootstrap'
import {connect} from 'react-redux'


const mapStateToProps =(state)=> ({
    favorites: state.FavoriteJobs.favorites
})

const FavoriteJobs =({favorites})=> {


    return(
        <ListGroup>
            {
                favorites.map(fav => (
                    <ListGroup.Item>{fav.title}</ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default connect(mapStateToProps)(FavoriteJobs)