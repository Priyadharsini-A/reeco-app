import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import theme from "./theme";
const Customorderbar = styled.div`
  color: black;
  width: 100%;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const Para = styled.p`
  display: inline-block;
  margin-right: 20px;
`;
const CustomButton = styled.button`
  border: none;
  outline: none;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 30px;
  cursor: pointer;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.primary ? theme.primaryColor : "white"};
  color: ${(props) => (props.primary ? "white" : theme.primaryColor)};
  border: 2px solid
    ${(props) => (props.primary ? theme.primaryColor : theme.primaryColor)};
`;
const OrderBar = () => {
  return (
    <Customorderbar>
      <Container>
        <Para style={{ marginTop: "10px" }}>Orders</Para>
        <Para>&gt;</Para>
        <a href="#order" style={{ color: "black" }}>
          Order 12133ABC
        </a>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "30%" }}>
            <h5>Order 12133ABC</h5>
          </div>
          <div
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "space-between",
            }}
          >
            <CustomButton>Back</CustomButton>
            <CustomButton primary='true'>Approve Order</CustomButton>
          </div>
        </div>
      </Container>
    </Customorderbar>
  );
};
export default OrderBar;
export { CustomButton };
