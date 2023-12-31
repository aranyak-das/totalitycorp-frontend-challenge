import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: "65px" }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
