import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ApproveProductStatus } from "../slices/ProductReducer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 24px;
  outline: none;
  background: none;
`;

const EditButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const TransparentButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: black;
`;

const Actions = ({ productId, onApprove, productName }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [iconColor, setIconColor] = useState("black");
  const [uncheckIconColor, setUncheckIconColor] = useState("black");

  const handleCheckClick = () => {
    const status = "Approved"; 
    dispatch(ApproveProductStatus({ productId, status }));
    onApprove(productId, status); 
    setIconColor("#43D854");
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    const status = "Missing";
    dispatch(ApproveProductStatus({ productId, status }));
    onApprove(productId, status);
    setUncheckIconColor("#ffa500");
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    const status = "Missing-Urgent";
    dispatch(ApproveProductStatus({ productId, status }));
    onApprove(productId, status);
    setUncheckIconColor("#FF0000");
    setShowModal(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <StyledButton onClick={handleCheckClick} style={{ color: iconColor }}>
        <Icon className="bi bi-check2"></Icon>
      </StyledButton>
      <StyledButton
        onClick={handleDeleteClick}
        style={{ color: uncheckIconColor }}
      >
        <Icon className="bi bi-x"></Icon>
      </StyledButton>
      <EditButton>Edit</EditButton>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Missing Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Is {productName} urgent?</Modal.Body>
        <Modal.Footer>
          <TransparentButton variant="secondary" onClick={handleCloseModal}>
            No
          </TransparentButton>
          <TransparentButton variant="primary" onClick={handleConfirmDelete}>
            Yes
          </TransparentButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Actions;
