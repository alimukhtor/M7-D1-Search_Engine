import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {Form, Row, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [job, setJob] = useState([])


    const fetchJobs = async()=> {
        const response = await fetch("https://strive-jobs-api.herokuapp.com/jobs", {
            "Content-Type":"application/json"
        }) 

        if(response.ok){
            const jobs = await response.json()
            setJob(jobs)
        }
    }

    
    const fetchJobsWithInputValue = async()=> {
        const response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?search=" + inputValue, {
            "Content-Type":"application/json"
        }) 

        if(response.ok){
            const jobs = await response.json()
            setJob(jobs)
        }
    }
    console.log("JobList:", job);
    // const filterJobs =(inputValue)=> {
    //     return(
    //         job.filter(j => j.title.toLowerCase().include(inputValue))
    //     )
    // }
    

    useEffect(() => {
       fetchJobs()
      }, []);

      useEffect(() => {
        fetchJobsWithInputValue()  
       }, [inputValue]); 
   
  return (
    <>
      <h1 className="text-light mt-5">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
            {/* <FaSearch className="search-icon"/> */}
            <Form.Control className="text-left search-input rounded-pill" type="search" placeholder="Even Yupiter Can Be Found Here..." 
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            />
        </Form.Group>
      </Form>
      <Row>
          {
              job.data && job.data.slice(0, 100).filter(j => j.title.toLowerCase().includes(inputValue)).map(j => (
                <Col xs={3} key={j._id}>
                    <h1 style={{color: "white"}}>{j.title}</h1>
                </Col>
            ))
          }
        </Row>
    </>
  );
};
export default Home;
