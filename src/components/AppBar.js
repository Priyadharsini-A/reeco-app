import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import theme from "./theme";
const CustomNavbar = styled(Navbar)`
  background-color: ${theme.primaryColor};
  color: white;
`;
const CustomNavLink = styled(Nav.Link)`
  color: white !important;
  margin-right: 30px;
`;
const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;
const CartIcon = styled.i`
  color: inherit;
  margin-right: 10px;
  font-size: 20px;
`;
const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background-color: ${theme.primaryColor} !important;
  border-color: ${theme.primaryColor} !important;
  color: white !important;
`;

const AppBar = () => {
  return (
    <CustomNavbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Reeco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink href="#home">Store</CustomNavLink>
            <CustomNavLink href="#link">Order</CustomNavLink>
            <CustomNavLink href="#link">Analytics</CustomNavLink>
          </Nav>
          <RightContent>
            <Nav>
              <CustomNavLink href="#home">
                <CartIcon className="bi bi-cart"></CartIcon>
              </CustomNavLink>
              <Dropdown>
                <CustomDropdownToggle as={Dropdown.Toggle}>
                  Hello, James
                </CustomDropdownToggle>
              </Dropdown>
            </Nav>
          </RightContent>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
};
export default AppBar;
