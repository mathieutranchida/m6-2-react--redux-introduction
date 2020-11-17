import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);

  // const totalOfItems = useSelector((state) => {
  //   const itemValues = Object.values(state);
  //   let total = itemValues.reduce((acc, cur) => {
  //     acc + cur + cur.price;
  //     return acc;
  //   }, 0);
  //   console.log(itemValues);
  //   return total;
  // });

  return (
    <Wrapper>
      <Main>
        <Header>
          <Title>Your Cart</Title>
          <SubTitle>{storeItems.length} Items</SubTitle>
        </Header>
        <CartItemWrapper>
          {storeItems.map((item, key) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </CartItemWrapper>
      </Main>
      <Footer>
        <Total>
          Total: <strong>$0.00</strong>
        </Total>
        <ButtonWrapper>
          <Button>Purchase</Button>
        </ButtonWrapper>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 35px 15px;
  color: white;
  background-color: #402043;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Main = styled.div``;

const Header = styled.div`
  padding: 0px 10px 30px 10px;
`;

const Title = styled.h2`
  margin: 0px;
`;

const SubTitle = styled.p`
  margin: 0px;
  color: grey;
  font-size: 10pt;
`;

const CartItemWrapper = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 35px 20px;
`;

const Total = styled.div`
  font-size: 15pt;
`;

const ButtonWrapper = styled.div`
  width: 125px;
`;

export default Cart;
