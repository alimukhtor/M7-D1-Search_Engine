import {useState, useEffect} from 'react'
import { MdPersonSearch } from "react-icons/md";
import {Card, Button, Row, Col, Form} from 'react-bootstrap'

const CompanyDetailPage =()=> {
    const [company, setCompany] = useState('')
    const [job, setJob] = useState([])
    const fetchJobsWithCompany = async () => {
        try {
          const response = await fetch(
            `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`,
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
        fetchJobsWithCompany();
      }, [company]);


return(

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
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            />
        </Form.Group>
      </Form>
      <Row>
        {
            job.data &&
            job.data
            .filter((j) => j.company_name.toLowerCase().includes(company))
            .map((j) => (
                <Col xs={3} key={j._id}>
                    <Card className="mt-5">
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
}


export default CompanyDetailPage