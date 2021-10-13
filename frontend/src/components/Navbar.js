import React, { useContext } from "react";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { QuoteContext } from "./Context";
import Link from "./Link";

const Navbar = () => {
	const { reload, setReload, addHidden, setAddHidden } =
		useContext(QuoteContext);

	const refreshQuote = (e) => {
		e.preventDefault();
		setReload(!reload);
	};

	const addQuote = (e) => {
		e.preventDefault();
		setAddHidden(!addHidden);
	};

	return (
		<Flex
			flexDirection="column"
			alignContent="center"
			as="nav"
			paddingBottom="10"
		>
			<Button
				size="lg"
				variant="ghost"
				textTransform="uppercase"
				letterSpacing="widest"
				fontWeight="200"
				width="100%"
				fontSize="lg"
				aria-label="button to fetch a random quote"
				onClick={(e) => refreshQuote(e)}
			>
				Random Quote
			</Button>
			<Button
				size="lg"
				variant="ghost"
				textTransform="uppercase"
				letterSpacing="widest"
				fontWeight="200"
				width="100%"
				fontSize="lg"
				aria-label="button to open the add a quote interface"
				onClick={(e) => addQuote(e)}
			>
				Add A Quote
			</Button>
			{/* <Link text="" click={setReload} state={reload} /> */}
			{/* <Link text="Add A Quote" click={setAddHidden} state={addHidden} /> */}
			<Link text="Help" />
		</Flex>
	);
};

export default Navbar;
