import { Divider, Flex } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Sidebar = () => {
	return (
		<Flex
			pos="sticky"
			left="5"
			h="100vh"
			w="30vw"
			boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
			flexDirection="column"
			alignItems="center"
		>
			<Logo />
			<Divider marginTop="10" />
			<Navbar />
		</Flex>
	);
};

export default Sidebar;
