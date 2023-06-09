import logo from './logo.svg';
import './App.css';
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import bg from './img/bg.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage : 'url('+ bg +')'}}></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='/logo192.png' width='80%'/>
            <h4>상품설명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://lovesykkkk.github.io/shop/shoes2.jpg' width='80%'/>
            <h4>상품설명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://lovesykkkk.github.io/shop/shoes3.jpg' width='80%'/>
            <h4>상품설명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
