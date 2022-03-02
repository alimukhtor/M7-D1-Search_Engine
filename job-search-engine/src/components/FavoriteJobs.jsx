import { Card, Button, Row, Col, Container } from "react-bootstrap";
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
    <Row className="mt-5 d-flex justify-content-center">
      {favorites.map((detail, i) => (
        <Col md={10}>
          <Card className="text-light mt-5">
            <Card.Img variant="top" src={detail.company_logo_url} />
            <Card.Body>
              <Card.Title className="text-info">{detail.title}</Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{ __html: detail.description }}
              ></Card.Text>
              <Button variant="success" className="text-right">{detail.salary}</Button>
            </Card.Body>
               <Button
            variant="danger"
            onClick={() => {
              removeFromFavorite(i);
            }}
          >
            <RiDeleteBin6Line />
          </Button>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJobs);
