import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { connect } from "react-redux";
import { removeFromFavsWithThunk } from "../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favoriteJobs.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (index) => {
    dispatch(removeFromFavsWithThunk(index));
  },
});

const FavoriteJobs = ({ favorites, removeFromFavorite }) => {
  return (
      <Container>
    <ListGroup className="mt-5">
      {favorites &&
        favorites.map((fav, i) => (
          <Row className="d-flex justify-content-center">
            <Col xs={10} lg={10}>
              <ListGroup.Item
                key={i}
                className="my-2"
                style={{
                  background: "#282C34",
                  color: "white",
                  border: "2px solid white",
                }}
              >
                {fav.title}
              </ListGroup.Item>
            </Col>
            <Col xs={2} lg={2}>
              <Button
                className="my-3"
                variant="danger"
                onClick={() => {
                  removeFromFavorite(i);
                }}
              >
                <RiDeleteBin6Line />
              </Button>
            </Col>
          </Row>
        ))}
    </ListGroup>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJobs);
