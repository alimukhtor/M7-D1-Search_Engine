import { ListGroup } from 'react-bootstrap'
import {connect} from 'react-redux'


const mapStateToProps =(state)=> ({
    favorites: state.favoriteJobs.favorites
})

const FavoriteJobs =({favorites})=> {


    return(
        <ListGroup>
            <h1>Hello</h1>
            {
                favorites && favorites.map(fav => (
                    <ListGroup.Item>{fav.title}</ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default connect(mapStateToProps)(FavoriteJobs)