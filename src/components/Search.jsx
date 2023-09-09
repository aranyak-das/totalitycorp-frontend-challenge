import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 40%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

function Search() {
  //   const boxStyles = {
  //     backgroundColor: "blue",
  //   };

  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <Box style={{ color: "black", padding: "2px" }}>
        <SearchIcon />
      </Box>
    </SearchContainer>
  );
}

export default Search;
