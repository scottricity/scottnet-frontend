import React, { useState, useEffect, Fragment } from "react";
import { faTerminal, faWarning, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid, Link, Tooltip } from "@mui/material";

var siz = (n) => {
	return { width: n, height: n }
}
class NavBar extends React.Component {
	render() {
		return (
			<Toolbar className="nav" sx={{ gap: "15px", fontWeight: 600 }}>
				<Avatar src="./selfies/faceshot1.png" sx={siz(50)} />
				<Typography variant="h5" sx={{ fontFamily: "roboto", fontWeight: "inherit" }}>
					Jonathan Scott
				</Typography>

				<Tooltip title="Join my Discord!" arrow>
					<Link underline="hover" sx={{ marginLeft: `50px`, fontSize: 20 }} href="/discord">
						Discord
					</Link>
				</Tooltip>
			</Toolbar>
		)
	}
}
class HomePage extends React.Component {
	render() {
		return (
			<Box>
				<NavBar />
				<Container disableGutters>
					<Typography>
						It seems this page is underconstruction!
					</Typography>
				</Container>
			</Box>
		)
	}
}

export default HomePage