import { Img } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";
import QuoteImageContainer from "../assets/notebook_quill.png";
import Quote from "./Quote";

const QuoteImage = () => {
	return (
		<Box
			gridRow="1"
			gridColumn="2"
			justifySelf="center"
			alignSelf="center"
			mt="10"
		>
			<Img
				src={QuoteImageContainer}
				alt="notebook"
				maxWidth="80vw"
				height="70vh"
			/>
			<Quote />
		</Box>
	);
};

export default QuoteImage;
