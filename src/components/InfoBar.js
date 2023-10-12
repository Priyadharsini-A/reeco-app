import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import theme from "./theme";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DetailsBar = styled(Container)`
  margin-top: 20px;

  width: 100%;
  height: 120px;
  border: 1px solid #CCCCCC;
  margin-top: 20px;
  border-radius: 10px;
`;
const StyledCol = styled(Col)`
  text-align: center; 
  padding: 0;
  height: 90px;
border-right:1px solid #CCCCCC ;
margin-top: 15px;
  &:first-child {
    border-left: none; 
  }
  &:last-child {
    border-right: none; 
  }
`;
const Heading = styled.p`
  margin-top: 10px;
  text-align: left;
  height: 25px;
  width: 80%;
  margin-left: 50px;
  margin-bottom: 2px;
`;
const Info = styled.p`
  text-align: left;
  height: 25px;
  width: 80%;
  margin-left: 50px;
  margin-top: 5px;
  font-weight: bold;
  padding-bottom:10px;
`;

const InfoBar = () => {
  return (
    <DetailsBar>
      <Row>
        <StyledCol >
          <Heading>Supplier</Heading>
          <Info>East coast fruits & Vegetables</Info>
        </StyledCol>

        <StyledCol>
          <Heading>Shipping date</Heading>
          <Info>Thu,Feb 10</Info>
        </StyledCol>
        <StyledCol>
          <Heading>Total</Heading>
          <Info>$15,028.3</Info>
        </StyledCol>
        <StyledCol>
          <Heading>Category</Heading>
          <Info>$15,028.3</Info>
        </StyledCol>
        <StyledCol>
          <Heading>Department</Heading>
          <Info>300-444-678</Info>
        </StyledCol>
        <StyledCol>
          <Heading>Status</Heading>
          <Info>Awaiting your Approval</Info>
        </StyledCol>
      </Row>
    </DetailsBar>
  );
};

export default InfoBar;
