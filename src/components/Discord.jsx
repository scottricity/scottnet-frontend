import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Menu, MenuItem, Typography, styled, Button, Box, Chip, Divider, Avatar, Card, CardContent, CssBaseline, Grid } from "@mui/material";

let invite = "https://discord.gg/cac9t9TMbB"

class DiscordRedirection extends React.Component {
	render() {
		document.title = "Discord"
		return (
			<Container sx={{textAlign: "center", height: "100%", display: "-ms-flexbox", verticalAlign: "center"}} disableGutters>
				<Typography sx={{height: "100%"}}>
					Redirection to {invite}
					
					{/*window.location.assign(invite)*/}
				</Typography>
			</Container>
		)
	}
}

export default DiscordRedirection