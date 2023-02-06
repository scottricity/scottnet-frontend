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
import "./style.scss";
import { BrowserRouter , Route , Routes } from "react-router-dom";

import Home from "./components/Home";
import Discord from "./components/Discord";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

function App() {
	return (
		<ThemeProvider theme={themeBck}>
			<div className='mount'>
			<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/discord' element={<Discord />} />
						</Routes>
					</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
