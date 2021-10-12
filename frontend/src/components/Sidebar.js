import { Img } from "@chakra-ui/image";
import { Divider, Flex } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Lightbulb from "../assets/8.svg";

const Sidebar = () => {
	return (
		<Flex
			pos="sticky"
			left="5"
			h="100vh"
			w="20vw"
			boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
			flexDirection="column"
			alignItems="center"
		>
			<Logo />
			<Divider marginTop="10" />
			<Navbar />
			<Img
				src={Lightbulb}
				alt="inspirational-lightbulb"
				pos="absolute"
				bottom="5"
				width="15vw"
			/>
		</Flex>
	);
};

export default Sidebar;
