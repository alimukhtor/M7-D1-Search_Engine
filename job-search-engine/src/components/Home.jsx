import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Home = () => {
  const [developer, setDeveloper] = useState("");
  const [limit, setLimit] = useState('')
  const [skip, setSkip] = useState('')
  const [job, setJob] = useState([]);

  // const fetchJobs = async()=> {
  //     const response = await fetch("https://strive-jobs-api.herokuapp.com/jobs", {
  //         "Content-Type":"application/json"
  //     })

  //     if(response.ok){
  //         const jobs = await response.json()
  //         setJob(jobs)
  //     }
  // }

  const fetchJobsWithInputValue = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=" + developer,
      {
        "Content-Type": "application/json",
      }
    );

    if (response.ok) {
      const jobs = await response.json();
      setJob(jobs);
      console.log(job);
    }
  };

  // useEffect(() => {
  //    fetchJobs()
  //   }, []);

  useEffect(() => {
    fetchJobsWithInputValue();
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
      </Form>
      <Row>
        {
            job.data &&
            job.data
                .slice(0, 100)
                .filter((j) => j.title.toLowerCase().includes(developer, limit))
                .map((j) => (
                <Col xs={3} key={j._id}>
                    <Card>
                    <Card.Body>
                        <Card.Title style={{ color: "white" }}>{j.company_name}</Card.Title>
                        <Card.Text style={{ color: "white" }}>
                            {j.title}
                        </Card.Text>
                        {/* <Button variant="primary">{j.url}</Button> */}
                    </Card.Body>
                    </Card>
                </Col>
                ))
        }
      </Row>
    </>
  );
};
export default Home;
