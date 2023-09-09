import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Components = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 55px 130px 0 130px;
`;

const Contents = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

function Navbar() {
  return (
    <Components>
      {navData.map((data) => (
        <Contents>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Contents>
      ))}
    </Components>
  );
}

export default Navbar;
