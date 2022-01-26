import {Col, Card, Button} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { AiFillLike } from "react-icons/ai";
import {connect} from 'react-redux'

const mapStateToProps =(state)=> ({})

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (job) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: job

    })
  },
})

const JobList =({job, developer, addToFavorite})=> {
  console.log("Jobs:", job);
    const location = useLocation();
    return(
      <>
        {
        job.data &&
          job.data
            .filter((j) => j.title.toLowerCase().includes(developer))
            .map((j) => (
              <Col xs={3} key={j._id}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      <Link to="/:company">
                        <div
                          className={(location.pathname === "/:company" ? " active" : "")}>
                          {j.company_name}
                        </div>
                      </Link>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>{j.title}</Card.Text>
                   { <Button className="border-0 mr-auto" style={{ background: "#282C34" }} onClick={() => {addToFavorite(j)}}>
                        <AiFillLike style={{ fontSize: "25px" }} />
                    </Button>}
                  </Card.Body>
                </Card>
              </Col>
            ))
        }
      </>
          )
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)