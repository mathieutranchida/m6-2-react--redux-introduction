import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <ShopWrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </ShopWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const ShopWrapper = styled.div`
  flex: 4;
  position: relative;
  height: 100vh;
  overflow: scroll;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  position: static;
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  flex: 1;
  min-width: 400px;
  height: 100vh;
`;

export default App;
