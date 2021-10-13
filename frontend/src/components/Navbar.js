import React from "react";
import { Flex } from "@chakra-ui/layout";
import Link from "./Link";

const Navbar = ({ reload, setReload, add, setAdd }) => {
	return (
		<Flex
			flexDirection="column"
			alignContent="center"
			as="nav"
			paddingBottom="10"
		>
			<Link text="Random Quote" click={setReload} state={reload} />
			<Link text="Add A Quote" click={setAdd} state={add} />
			<Link text="Help" />
		</Flex>
	);
};

export default Navbar;
