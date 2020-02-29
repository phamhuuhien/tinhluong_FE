import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/" active>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/About">About</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Header;