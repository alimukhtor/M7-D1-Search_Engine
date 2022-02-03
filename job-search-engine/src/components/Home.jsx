import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row, Dropdown } from "react-bootstrap";
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

  useEffect(() => {
    getJobs(inputValue);
  }, [inputValue]);

  return (
    <>
      <Row className="mt-5">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <h1 className="text-light mt-5 text-center">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-left search-input rounded-pill"
            type="search"
            placeholder="Even Yupiter Can Be Found Here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
      <Row>
        <JobList job={jobs} inputValue={inputValue} />
      </Row>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
