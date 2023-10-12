import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromServer } from '../slices/ProductReducer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Actions from './Actions';
import styled from 'styled-components';
import { CustomButton } from './OrderBar';
import theme from './theme';

const StyledContainer = styled(Container)`
  margin-top: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  padding: 10px;
`;

const StyledInfoBar = styled(Row)`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledSearchInput = styled(Form.Control)`
  border-radius: 10px;
  width: 500px;
`;

const StyledActionsCol = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledPrinterButton = styled.button`
  color: ${theme.primaryColor};
  margin-left: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledProductListHeaderRow = styled(Row)`
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #ECECEC;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

const StyledProductListRow = styled(Row)`
  margin-left: 20px;
  border-bottom: 1px solid #CCCCCC;
  margin-right: 20px;
  margin-top: 20px;
`;
const statusStyles = {
  approved: {
    backgroundColor: '#43D854', 
    color: 'white',
    padding: '4px 8px', 
    borderRadius: '20px',
    width:'90px'
  },
  'missing-urgent': {
    backgroundColor: '#FF0000', 
    color: 'white',
    padding: '4px 8px', 
    borderRadius: '20px',
    width:'130px'
  },
  missing: {
    backgroundColor: '#ffa500', 
    color: 'white',
    padding: '4px 8px', 
    borderRadius: '20px',
    width:'70px'
  },
  
};



const ProductList = () => {
  const { ProductList } = useSelector((state) => state.Product);
  const [products, setProducts] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFromServer());
  }, [dispatch]);

   useEffect(() => {
    setProducts(ProductList);
    setUpdatedProducts(ProductList);
  }, [ProductList]);

  const handleUpdateApprove = (productId,status) => {
    
    const updatedProductList = updatedProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, status: status };
      }
      return product;
    });
    setUpdatedProducts(updatedProductList);
  };
  return (
    <StyledContainer>
      <StyledInfoBar className="align-items-center">
        <Col xs={10}>
          <StyledSearchInput
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Col>
        <Col xs={2} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CustomButton>Add Item</CustomButton>
          <button style={{ color: `${theme.primaryColor}`, marginLeft: '10px' }}>
            <i className="bi bi-printer"></i>
          </button>
        </Col>
      </StyledInfoBar>
      <StyledProductListHeaderRow className="align-items-center">
        <Col xs={1}></Col>
        <Col xs={3}>Name</Col>
        <Col xs={1}>Brand</Col>
        <Col xs={1}>Price</Col>
        <Col xs={1}>Quantity</Col>
        <Col xs={1}>Total</Col>
        <Col xs={2}>Status</Col>
        <Col xs={2}></Col>
      </StyledProductListHeaderRow>
      {updatedProducts.map((product) => (
        <StyledProductListRow className="align-items-center" key={product.id}>
          <Col xs={1}>
            <img src={product?.image} alt={product?.name} />
          </Col>
          <Col xs={3}>{product?.name}</Col>
          <Col xs={1}>{product?.brand}</Col>
          <Col xs={1}>{product?.price}</Col>
          <Col xs={1}>{product?.quantity}</Col>
          <Col xs={1}>{product?.total}</Col>
          <Col xs={2}>
            <div style={{display:'flex',justifyContent:'center'}}><div
            className="status-label"
            style={statusStyles[product.status.toLowerCase()]}
          >
            {product?.status}
          </div></div></Col>
          <Col xs={2}>
            <Actions productId={product.id} productName={product.name} onApprove={handleUpdateApprove} />
          </Col>
        </StyledProductListRow>
      ))}
    </StyledContainer>
  );
};
export default ProductList;
