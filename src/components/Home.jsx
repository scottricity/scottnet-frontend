import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid } from "@mui/material";

class HomePage extends React.Component {
	render() {
		return (
			<Container>
				<AppBar sx={{display: "flex"}}>
					<Typography>
						Jonathan Scott
					</Typography>
				</AppBar>
			</Container>
		)
	}
}

export default HomePage