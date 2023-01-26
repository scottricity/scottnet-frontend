import logo from './terminal-solid.svg';
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box } from "@mui/material";
import { Utils } from "./utils.js";
//Font Import
import "@fontsource/ubuntu";
import "@fontsource/ubuntu-mono";
import "@fontsource/dotgothic16";
import "@fontsource/roboto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faWarning, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import themeBck from "./theme.js"
import { ThemeProvider } from '@mui/system';
import "./style.css";

let utils = new Utils()

function Navi() {
	return (
		<Container id="navbar" maxWidth="100%" sx={{ textAlign: "center", width: "100%" }}>
			<Typography display={'inline'} fontSize="25px">
				{utils.escapeCode("<")} {utils.escapeCode("/")} Portfolio | Jonathan Scott {utils.escapeCode(">")}
			</Typography>
		</Container>
	)
}



//To hold on for later
/**
 setTimeout(() => {
	document.getElementById('profile-faceshot').src = utils.random(['./faceshot1.png'])
}, 5000)
 */
//<a href="https://www.buymeacoffee.com/scottnet"><img src="https://img.buymeacoffee.com/button-api/?text=Donate ;)&emoji=&slug=scottnet&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" /></a>

function App() {
	return (
		<ThemeProvider theme={themeBck}>
			<div>
				
				<Navi></Navi>
				<Container className='bio round1' disableGutters maxWidth="md"> {/* Add responsiveness?? */}
					<div className='img-section'>
						<img src='./faceshot1.png' className='round1' id="profile-faceshot"></img>
						<div className='bio-desc'>
							<Typography variant='h5' fontFamily={"roboto"}>
								Jonathan Scott
							</Typography>
							<Typography variant='subtitle1' fontStyle={"italic"} color={"GrayText"}>
								Full-Stack Developer with ADHD
							</Typography>
							<Typography variant='h6'>
								Something about me will go here.
							</Typography>
						</div>
					</div>
					<div className='media'>
						<Typography variant='subtitle1'>
							This site is still underconstruction
						</Typography>
					</div>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
