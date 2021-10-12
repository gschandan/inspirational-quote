import React from "react";
import { Flex } from "@chakra-ui/layout";
import Link from "./Link";

const Navbar = ({ setReload }) => {
	return (
		<Flex
			flexDirection="column"
			alignContent="center"
			as="nav"
			paddingBottom="10"
		>
			<Link text="Random Quote" click={setReload} />
			<Link text="Add A Quote" />
			<Link text="Help" />
		</Flex>
	);
};

export default Navbar;
