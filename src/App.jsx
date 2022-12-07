import logo from './terminal-solid.svg';
import React, { useState } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button } from "@mui/material";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu-mono";
import "@fontsource/dotgothic16";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import themeBck from "./theme.js"
import { ThemeProvider } from '@mui/system';
import "./style.css"

function Navi() {
  return (
    <Container id="navbar" sx={{textAlign: "center", width: "100%"}} maxWidth="auto">
      <Typography display={'inline'} fontSize="25px">
        <FontAwesomeIcon icon={faTerminal} />
        scottnet
      </Typography>
    </Container>
  )
}

function App() {

  return (
    <ThemeProvider theme={themeBck}>
      <Navi>
      </Navi>

    </ThemeProvider>
  );
}

export default App;
