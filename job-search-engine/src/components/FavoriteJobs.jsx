import { ListGroup, Button } from 'react-bootstrap'
import { RiDeleteBin6Line } from "react-icons/ri";
import {connect} from 'react-redux'


const mapStateToProps =(state)=> ({
    favorites: state.favoriteJobs.favorites
})

const mapDispatchToProps =(dispatch)=> ({
    removeFromFavorite: (index) => {
        dispatch({
          type: 'REMOVE_FROM_FAVS',
          payload: index
    
        })
      },
})
const FavoriteJobs =({favorites, removeFromFavorite})=> {


    return(
        <ListGroup>
            {
                favorites && favorites.map((fav, i)=> (
                    <>
                    <ListGroup.Item key={i}>{fav.title}</ListGroup.Item>
                    <Button variant="danger" onClick={() => {removeFromFavorite(i)}}><RiDeleteBin6Line /></Button>
                    </>
                ))
            }
        </ListGroup>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJobs)