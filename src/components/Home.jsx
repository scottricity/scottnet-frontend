import React, { useState, useEffect, Fragment, useContext } from "react";
import { faTerminal, faWarning, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Utils } from "../utils";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid, Link, Tooltip, List, ListItem } from "@mui/material";

import MediaButtons from "./MediaButtons";
import { ThemeContext } from "@emotion/react";

const utils = new Utils()

function ThemeSwitcherComp() {
	const theme = useContext(ThemeContext)
}

/************************\
======Navigation Bar======
\************************/
class NavBar extends React.Component {
	render() {
		return (
			<Toolbar className="nav" sx={{ gap: "15px", fontWeight: 600}} component="header">
				<Avatar src="./selfies/faceshot1.png" sx={utils.autoSize(50)} />
				<Typography variant="h5" sx={{ fontWeight: "inherit" }}>
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

/************************\
========Biography=========
\************************/
class Bio extends React.Component {
	render() {
		return (
			<Box maxWidth={"70%"} mx={8}>
				<Divider textAlign="left">
					<Typography variant="h5" sx={{ fontWeight: "600" }}>
						About me
					</Typography>
				</Divider>
				<Typography variant="h6">
					hi
				</Typography>
			</Box>
		)
	}
}

/************************\
======Media Buttons=======
\************************/
class Media extends React.Component {
	render() {
		return (
			<Box maxWidth={"70%"} mx={8}>
				<Divider textAlign="left">
					<Typography variant="h5" sx={{ fontWeight: "600" }}>
						Social Media
					</Typography>
				</Divider>
				<List>
					<ListItem>
						<MediaButtons.GithubButton href="https://github.com/scottricity" target="_blank">
							<Typography textTransform={"none"}>
								Github
							</Typography>
						</MediaButtons.GithubButton>
					</ListItem>
					<ListItem>
						<MediaButtons.NpmButton href="https://www.npmjs.com/~scottricity" target="_blank">
							<Typography textTransform={"none"}>
								NPM
							</Typography>
						</MediaButtons.NpmButton>
					</ListItem>
				</List>
			</Box>
		)
	}
}

/************************\
=======Project List=======
\************************/
class Projects extends React.Component {
	render() {
		return (
			<Box maxWidth={"70%"} mx={8}>
				<Divider textAlign="left">
					<Typography variant="h5" sx={{ fontWeight: "600" }}>
						Things I've done
					</Typography>
				</Divider>
				<Grid container gap={"5px"} sx={{ padding: "10px" }} flex>
					<Grid>
						<Card>
							<Typography className="title">hi</Typography>
							<Typography>ok</Typography>
						</Card>
					</Grid>
					<Grid>
						<Card>
							<Typography>hi</Typography>
							<Typography>ok</Typography>
						</Card>
					</Grid>
					<Grid>
						<Card>
							<Typography>hi</Typography>
							<Typography>ok</Typography>
						</Card>
					</Grid>
				</Grid>
			</Box>
		)
	}
}

class HomePage extends React.Component {
	render() {
		return (
			<Box>
				<NavBar />
				<Container sx={{ marginTop: "5px" }}>
					<Bio />
					<br />
					<Media />
					<br />
					<Projects />
				</Container>
			</Box>
		)
	}
}

export default HomePage