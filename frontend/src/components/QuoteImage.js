import { Img } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";
import QuoteImageContainer from "../assets/notebook_quill.png";
import Quote from "./Quote";

const QuoteImage = () => {
	return (
		<Box position="relative">
			<Img
				src={QuoteImageContainer}
				alt="notebook"
				boxSize="95vh"
				objectFit="contain"
			/>
			<Quote />
		</Box>
	);
};

export default QuoteImage;
