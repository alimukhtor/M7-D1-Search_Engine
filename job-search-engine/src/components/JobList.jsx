import {Col, Card} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const JobList =(props)=> {
    const location = useLocation();
    return(
        <>
        {
        props.job.data &&
          props.job.data
            // .filter((j) => j.title.toLowerCase().includes(props.developer))
            .map((j) => (
              <Col xs={3} key={j._id}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      
                      <Link to="/:company">
                        <div
                          className={
                            "nav-link" +
                            (location.pathname === "/:company" ? " active" : "")
                          }
                        >
                         {j.company_name}
                        </div>
                      </Link>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>{j.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
                        }
                        </>
            )
}

export default JobList