import React from "react";
import { Button } from "@chakra-ui/button";

const Link = ({ text, click, state = null }) => {
	const handleClick = (e) => {
		e.preventDefault();
		if (text === "Random Quote") {
			click(!state);
		}
		if (text === "Add A Quote") {
			click(!state);
		}
	};

	return (
		<Button
			size="lg"
			variant="ghost"
			textTransform="uppercase"
			letterSpacing="widest"
			fontWeight="200"
			width="100%"
			fontSize="lg"
			aria-label={`link to ${text}`}
			onClick={(e) => handleClick(e)}
		>
			{text}
		</Button>
	);
};

export default Link;
