import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import JobList from "./JobList";


const Home = () => {
  const [developer, setDeveloper] = useState("");
  // const [limit, setLimit] = useState("");
  // const [skip, setSkip] = useState("");
  const [job, setJob] = useState([]);
  const location = useLocation()


  // ******************* FETCHING  BY INPUT VALUE *****************

  const fetchJobsWithInputValue = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${developer}`,
        {
          "Content-Type": "application/json",
        }
      );

      if (response.ok) {
        const jobs = await response.json();
        setJob(jobs);
        console.log(job);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchJobsWithInputValue()
  }, [developer]);


  return (
    <>
      <h1 className="text-light mt-5">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          {/* <FaSearch className="search-icon"/> */}
          <Form.Control
            className="text-left search-input rounded-pill"
            type="search"
            placeholder="Even Yupiter Can Be Found Here..."
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
          />
        </Form.Group>
        {/* <Button variant="" className="rounded-pill" style={{background: "#287C41", fontSize:"25px" }}> */}
          <Link to="/favorites">
            <div className={(location.pathname === "/favorites" ? " active" : "")}>
             Favorites <FcLike className="mb-1" style={{ background: "#282C34", fontSize:"20px" }}/>
            </div>
          </Link>
        {/* </Button> */}
      </Form>
      <Row>
        <JobList job={job} developer={developer} />
      </Row>
    </>
  );
};
export default Home;
