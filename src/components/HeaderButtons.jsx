import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 15px;
    aligh-items: centre;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #333333;
  font-weight: bold;
  background-color: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  height: 32px;
  :hover {
    background-color: #32cd32;
  }
`;

function HeaderButtons() {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, width: 100 }}>Sign up</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
}

export default HeaderButtons;
