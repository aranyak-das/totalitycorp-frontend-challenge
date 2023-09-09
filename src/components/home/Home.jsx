import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(Box)`
  padding: 20px 10px;
  background-color: #f2f2f2;
`;

function Home() {
  return (
    <>
      <Navbar />;
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
