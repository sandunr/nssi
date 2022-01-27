import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { House } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

function NavigationBar() {
    const navigate = useNavigate();
    const [selectedMainMenuItem, setSelectedMainMenuItem] = useState('');
    const [submenu, setSubmenu] = useState([]);

    const fetchData = async () => {
        try {
            // const response = await fetch(url);
            // const json = await response.json();
            // setSubmenu(json);
            switch (selectedMainMenuItem) {
                case '':
                    setSubmenu([]);
                    break;
                case 'dashboard':
                    setSubmenu(dashboardSubmenu);
                    break;
                case 'intake':
                    setSubmenu([]);
                    break;
                case 'utilities':
                    setSubmenu([]);
                    break;
                case 'training':
                    setSubmenu([]);
                    break;
                case 'documentation':
                    setSubmenu([]);
                    break;
                case 'support':
                    setSubmenu([]);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedMainMenuItem]);

    const onNavigate = (path, selectedItem) => {
        setSelectedMainMenuItem(selectedItem);
        navigate(path);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#" onClick={() => navigate('/')}>
                        <img
                            alt=""
                            src="/images/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ fontSize: '0.7em' }}>NETWORK SYSTEMS AGILE PORTFOLIO OPERATIONS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" />
                        <Nav>
                            <Nav.Link href="#" onClick={() => onNavigate('/', '')}><House /></Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/intake', 'intake')}>Intake</Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/dashboard', 'dashboard')}>Dashboard</Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/utilities', 'utilities')}>Utilities</Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/training', 'training')}>Training</Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/documentation', 'documentation')}>Documentation</Nav.Link>
                            <Nav.Link href="#" onClick={() => onNavigate('/support', 'support')}>Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                {submenu.map((menu, idx) =>
                    <Nav.Item key={idx}>
                        <Nav.Link onClick={() => navigate(menu.path)}>{menu.title}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
        </>
    );
}

export default NavigationBar;


const dashboardSubmenu = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "2021 SAFE Metrics Menu", path: "/dashboard/safe" },
    { title: "Scrum Master", path: "/dashboard/scrum-master" },
    { title: "Bugs/Defects", path: "/dashboard/bugs" },
    { title: "Data Integrity", path: "/dashboard/data-integrity" },
    { title: "Reason Indicators", path: "/dashboard/reason-indicators" },
    { title: "Self Assessment", path: "/dashboard/self-assessment" }
];