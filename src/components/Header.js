import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Homepage</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/favourite">Favourite</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Header;
