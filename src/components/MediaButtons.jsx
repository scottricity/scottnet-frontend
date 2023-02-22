import React, { useState, useEffect, Fragment } from "react";
import { faTerminal, faWarning, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Color from "color";

import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid, Link, Tooltip, List, ListItem } from "@mui/material";

const GithubButton = styled(Button)({
	backgroundColor: "#d3d3d3",
	color: "black",
	'&:hover': {
		backgroundColor: "#a9a8a8"
	}
})

const npmColor = Color("rgb(204,53,52)")
const NpmButton = styled(Button)({
	backgroundColor: npmColor.string(),
	color: "white",
	'&:hover': {
		backgroundColor: npmColor.darken(0.2).string()
	}
})

export default {GithubButton, NpmButton}