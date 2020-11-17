import React from "react";
import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { close } from "react-icons-kit/ikons/close";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <Wrapper>
        <Main>
          <Title>{item.title}</Title>
          <Icon icon={close} size={20} />
        </Main>
        <Second>
          <Quantity>Quantity:</Quantity>
          <EditWrapper>
            <Edit>{item.quantity}</Edit>
          </EditWrapper>
        </Second>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border: 2px dashed grey;
  margin-bottom: 7px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16pt;
`;

const Second = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f1d35;
  padding: 15px;
`;

const Quantity = styled.div`
  padding-right: 15px;
  color: grey;
`;

const EditWrapper = styled.div`
  height: 22px;
  width: 22px;
  background-color: white;
  color: black;
  text-align: center;
  align-items: center;
`;

const Edit = styled.div``;

export default CartItem;
