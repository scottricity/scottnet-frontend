import logo from './terminal-solid.svg';
import React, { useState } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button } from "@mui/material";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu-mono";
import "@fontsource/dotgothic16";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal , faWarning , faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import themeBck from "./theme.js"
import { ThemeProvider } from '@mui/system';
import "./style.css"

function Navi() {
	return (
		<Container maxWidth="100%" disableGutters sx={{width: "100%"}}>
			<Container id="navbar" maxWidth="100%" sx={{ textAlign: "center", width: "100%"}}>
				<Typography display={'inline'} fontSize="25px">
					<FontAwesomeIcon icon={faTerminal} />
					scottnet
				</Typography>
			</Container>
			<Typography sx={{textAlign: "center", marginTop: "10%"}} fontSize="50px">
			<FontAwesomeIcon icon={faPersonDigging} fontSize="300px" />
			<br/>
				This site is under construction! test2
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
