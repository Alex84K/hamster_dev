import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (_jsx(Navbar, { expand: "lg", className: "bg-body-tertiary", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { href: "/", children: "Hamster_dev" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "me-auto", children: [_jsx(Nav.Link, { onClick: () => navigate('/'), children: "Home" }), _jsx(Nav.Link, { onClick: () => navigate('/test'), children: "Test" }), _jsx(Nav.Link, { onClick: () => navigate('/solar-data'), children: "Solar data" }), _jsx(Nav.Link, { onClick: () => navigate('/gemini'), children: "Gemini 2.0 Flash" }), _jsxs(NavDropdown, { title: "Dropdown", id: "basic-nav-dropdown", children: [_jsx(NavDropdown.Item, { href: "#action/3.1", children: "Action" }), _jsx(NavDropdown.Item, { href: "#action/3.2", children: "Another action" }), _jsx(NavDropdown.Item, { href: "#action/3.3", children: "Something" }), _jsx(NavDropdown.Divider, {}), _jsx(NavDropdown.Item, { href: "#action/3.4", children: "Separated link" })] })] }) })] }) }));
};
export default Header;
