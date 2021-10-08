import React from "react";
import { Flex } from "@chakra-ui/layout";
import Link from "./Link";

const Navbar = () => {
	return (
		<Flex
			width="30%"
			flexDirection="column"
			alignContent="center"
			marginTop="10"
			as="nav"
		>
			<Link text="Home" />
			<Link text="Random" />
			<Link text="Add Quote" />
			<Link text="Help" />
		</Flex>
	);
};

export default Navbar;
