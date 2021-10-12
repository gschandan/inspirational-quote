import { Img } from "@chakra-ui/image";
import { Divider, Grid } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Lightbulb from "../assets/8.svg";

const Sidebar = () => {
	return (
		<Grid
			gridRow="1/3"
			pos="sticky"
			left="5"
			h="100vh"
			w="20vw"
			maxWidth="200px"
			boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
			alignItems="center"
		>
			<Logo />
			<Divider marginTop="2" />
			<Navbar />
			{/* <Img
				src={Lightbulb}
				alt="inspirational-lightbulb"
				width="15vw"
				justifySelf="center"
			/> */}
		</Grid>
	);
};

export default Sidebar;
