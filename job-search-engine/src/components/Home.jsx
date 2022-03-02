import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import JobList from "./JobList";
import { getAlljobOffers } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jobs: state.jobOffers.jobs,
  favorites: state.favoriteJobs.favorites.length,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (inputValue) => {
    dispatch(getAlljobOffers(inputValue));
  },
});

const Home = ({ jobs, getJobs, favorites }) => {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    getJobs(inputValue);
  }, [inputValue]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1 className="text-light mt-5 text-center">
            <strong>Strive Job Search Engine</strong> <MdPersonSearch />
          </h1>
          <Form className="mt-5">
            <Form.Group>
              <Form.Control
                className="text-left  rounded-pill"
                type="search"
                placeholder="Even Yupiter Can Be Found Here..."
                value={inputValue}
                onChange={handleInput}
              />
            </Form.Group>
            <Link to="/favorites">
              <div
                className={location.pathname === "/favorites" ? " active" : ""}
              >
                <Button variant="">
                  <FcLike className="mb-2 mr-2" style={{ fontSize: "30px" }} />
                  <span className="text-light" style={{ fontSize: "25px" }}>{favorites}</span>
                </Button>
              </div>
            </Link>
          </Form>
        </Col>
      </Row>
      <Row>
        <JobList job={jobs} inputValue={inputValue} />
      </Row>
    </Container>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
