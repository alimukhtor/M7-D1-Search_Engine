import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [job, setJob] = useState([])


    const fetchJobs = async(query)=> {
        const response = await fetch("https://strive-jobs-api.herokuapp.com/" + query, {
            "Content-Type":"application/json"
        }) 

        if(response.ok){
            const jobs = await response.json()
            setJob(jobs)
            console.log("Data", jobs);
        }
    }

    useEffect(() => {
       fetchJobs("jobs")
      }, []);

   
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
    </>
  );
};
export default Home;
