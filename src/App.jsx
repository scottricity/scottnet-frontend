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

function Navi() {
  return (
    <Container sx={{textAlign: "center"}}>
      <Typography display={'inline'}>
        <FontAwesomeIcon icon={faTerminal} />
        scottnet u
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
