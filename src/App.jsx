import logo from './terminal-solid.svg';
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid } from "@mui/material";
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
		<Container id="navbar" disableGutters maxWidth="xl" sx={{ textAlign: "center" }}>
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
			<div className='mount'>
				<Navi></Navi>
				<Grid container>
					<Grid xs item
						alignItems="center"
						display="flex"
						justifyContent="center">
						<Card
							className='bio round1'
							sx={{ width: 700, justifyContent: "center" }}> {/* Add responsiveness?? */}
							<div
								className='img-section'>
								<Avatar
									src='./faceshot1.png'
									sx={{ width: 140, height: 140 }}>
								</Avatar>
								<CardContent
									className='bio-desc'>
									<Typography
										variant='h5'
										fontFamily={"roboto"}>
										Jonathan Scott
									</Typography>
									<Typography
										variant='subtitle1'
										fontStyle={"italic"}
										color={"GrayText"}>
										Full-Stack Developer with ADHD
									</Typography>
									<Typography
										variant='h6'>
										Something about me will go here.
									</Typography>
								</CardContent>
							</div>
							<Divider>
								<Chip
									label="Projects"
									variant='filled'
									sx={{ fontSize: "larger" }}></Chip>
							</Divider>
							<Typography
								variant='h6'>
								This site is still underconstruction
							</Typography>
						</Card>
						<Card>
							<Typography>
								h
							</Typography>
						</Card>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
}

export default App;
