import { Box, Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Categories,
  MarketCapitalization,
  Metrics,
  VolumeOptions,
} from "./comboBox";
import Crypto, { ComboBox, FilterBar } from "./Components/Crypto/crypto";
import Market from "./Components/Markets/market";
import NavBar from "./Components/NavBar/NavBar";
import Stocks from "./Components/Stocks/stocks";

const SubHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

function App() {
  const [buttonstate, setButtonState] = useState<string>("AllList");

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <FilterBar>
        <SubHeaderBox component="div" sx={{ width: "20%" }}>
          <ButtonGroup variant="outlined" size="medium" color="secondary">
            <Button
              title="AllList"
              variant={buttonstate === "AllList" ? "contained" : "outlined"}
              onClick={() => setButtonState('AllList')}
            >
              All Coin
            </Button>
            <Button
              title="Watch"
              variant={buttonstate === "Watch" ? "contained" : "outlined"}
              onClick={() => setButtonState('Watch')}
            >
              Watch List
            </Button>
          </ButtonGroup>
        </SubHeaderBox>
        <SubHeaderBox component="div" sx={{ width: "80%" }}>
          <ComboBox label="Metrics" option={Metrics} />
          <ComboBox label="All Categories" option={Categories} />
          <ComboBox label="Volume Options" option={VolumeOptions} />
          <ComboBox label="Market Cap" option={MarketCapitalization} />
        </SubHeaderBox>
      </FilterBar>
      <Routes>
        <Route path="cryptocurrencies" element={<Crypto />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="markets" element={<Market />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
