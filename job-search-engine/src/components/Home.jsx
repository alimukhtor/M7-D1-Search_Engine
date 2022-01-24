import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {Form} from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <h1 className="text-light mt-5">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
            {/* <FaSearch className="search-icon"/> */}
            <Form.Control className="text-left search-input rounded-pill" type="search" placeholder="Even Yupiter Can Be Found Here..." />
        </Form.Group>
      </Form>
    </>
  );
};
export default Home;
