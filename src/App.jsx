import logo from './terminal-solid.svg';
import * as React from "react";
import { AppBar , Toolbar , Container, Menu , MenuItem , Typography } from "@mui/material";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu-mono";
import "@fontsource/dotgothic16";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import themeBck from "./theme.js"
import { ThemeProvider } from '@mui/system';
function Navi() {
  return (
    <ThemeProvider theme={themeBck}>
      <AppBar position='fixed'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FontAwesomeIcon icon={faTerminal} size="2x"/>
          <Typography fontSize={"30px"} fontFamily={["ubuntu", "monospace"]} sx={{"userSelect": "none"}}>
            scottnet
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <Typography>
      hi
    </Typography>
    </ThemeProvider>
  )
}

function App() {
  return (
    <Navi></Navi>
  );
}

export default App;
