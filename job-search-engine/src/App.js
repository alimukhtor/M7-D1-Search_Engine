import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container>
    <div className="App">
       <Home />
    </div>
    </Container>
  );
}

export default App;
