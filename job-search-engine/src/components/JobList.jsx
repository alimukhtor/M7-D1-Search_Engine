import { Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { connect } from "react-redux";
import { addToFavoritesWithThunk } from "../redux/actions";
import { sendToCompDetail } from "../redux/actions";

const mapStateToProps = (state) => ({
  isError: state.favoriteJobs.isError,
  isLoading: state.jobOffers.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (favJob) => {
    dispatch(addToFavoritesWithThunk(favJob));
  },
  sendToCompPage: (company_name) => {
    dispatch(sendToCompDetail(company_name));
  },
});

const JobList = ({
  job,
  inputValue,
  addToFavorite,
  isError,
  isLoading,
  sendToCompPage,
}) => {
  
  const location = useLocation();

  return (
    <>
      {isError ? (
        <Alert
          variant="danger"
          className="text-center rounded-pill mt-5"
          style={{ fontSize: "15px", marginLeft: "500px" }}
        >
          Error has occured {isError}
        </Alert>
      ) : isLoading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        job.data &&
        job.data
          .filter((j) => j.title.toLowerCase().includes(inputValue))
          .map((j) => (
            <Col xs={12} md={4} lg={3} key={j._id}>
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <Link to="/companyName">
                      <div
                        className={
                          location.pathname === "/companyName" ? " active" : ""
                        }
                        onClick={() => {
                          sendToCompPage(j.company_name);
                        }}
                      >
                        <span className="text-info" style={{ fontSize: "25px" }}>{j.company_name}</span>
                      </div>
                    </Link>
                   
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}><a href={j.url}><span className="text-light">{j.title}</span></a></Card.Text>

                  <Button
                    className="border-0 mr-auto"
                    style={{ background: "#282C34" }}
                    onClick={() => {
                      addToFavorite(j);
                    }}
                  >
                    <FcLikePlaceholder style={{ fontSize: "25px" }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
