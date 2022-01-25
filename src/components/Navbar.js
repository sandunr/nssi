import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { House } from 'react-bootstrap-icons';

function NavigationBar() {
    const navigate = useNavigate();


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#" onClick={() => navigate('/')}>
                    <img
                        alt=""
                        src="/images/logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span style={{fontSize: '0.7em'}}>NETWORK SYSTEMS AGILE PORTFOLIO OPERATIONS</span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#" onClick={() => navigate('/')}><House /></Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/intake')}>Intake</Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/utilities')}>Utilities</Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/training')}>Training</Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/documentation')}>Documentation</Nav.Link>
                    <Nav.Link href="#" onClick={() => navigate('/support')}>Support</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;