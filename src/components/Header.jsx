// import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
} from "@mui/material";

// import { Menu } from "@mui/icons-material";

// import { Link } from "react-router-dom";

import Search from "./Search";
import HeaderButtons from "./HeaderButtons";

const StyledHeader = styled(AppBar)`
  background: #333333;
  height: 65px;
`;

const Component = styled(Box)`
  margin: 0 1% 0 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 15px;
  font-style: italic;
`;

const HeaderButtonsWrap = styled(Box)`
  margin: 0 auto 0 1%;
`;

function Header() {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  return (
    <StyledHeader position="fixed">
      <Toolbar style={{ minHeight: 65 }}>
        <Component>
          <img src={logoUrl} alt="logo" style={{ width: 75 }} />
          <Box>
            <SubHeading>2.0</SubHeading>
          </Box>
        </Component>
        <Search />
        <HeaderButtonsWrap>
          <HeaderButtons />
        </HeaderButtonsWrap>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
