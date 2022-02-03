import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row, Container, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import JobList from "./JobList";
import { getAlljobOffers } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jobs: state.jobOffers.jobs
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (inputValue) => {
    dispatch(getAlljobOffers(inputValue));
  },
});

const Home = ({ jobs, getJobs }) => {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  const handleInput =(e)=> {
    setInputValue(e.target.value)
  }

  
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
              <div className={location.pathname === "/favorites" ? " active" : ""}>
                Favorites{" "}
                <FcLike
                  className="mb-1"
                  style={{ background: "#282C34", fontSize: "20px" }}
                />
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
