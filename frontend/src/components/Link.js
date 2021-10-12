import React from "react";
import { Button } from "@chakra-ui/button";

const Link = ({ text }) => {
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
		>
			{text}
		</Button>
	);
};

export default Link;
