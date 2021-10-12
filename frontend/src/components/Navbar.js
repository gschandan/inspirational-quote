import React from "react";
import { Flex } from "@chakra-ui/layout";
import Link from "./Link";

const Navbar = () => {
	return (
		<Flex
			flexDirection="column"
			alignContent="center"
			marginTop="10vh"
			as="nav"
		>
			<Link text="Random" />
			<Link text="Add Quote" />
			<Link text="Help" />
		</Flex>
	);
};

export default Navbar;
