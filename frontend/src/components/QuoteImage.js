import { Img } from "@chakra-ui/image";
import { Grid } from "@chakra-ui/layout";
import React from "react";
import QuoteImageContainer from "../assets/notebook.png";
import Quill from "../assets/quill.png";
import Quote from "./Quote";

const QuoteImage = ({ reload, setReload }) => {
	return (
		<Grid position="relative" gridTemplateColumns="3fr 1fr">
			<Img
				src={QuoteImageContainer}
				alt="notebook"
				boxSize="95vh"
				objectFit="contain"
				gridRow="1/3"
				gridColumn="1"
				alignSelf="flex-end"
				justifySelf="flex-end"
			/>
			<Quote reload={reload} setReload={setReload} />
			<Img
				src={Quill}
				alt="quill"
				boxSize="95vh"
				objectFit="contain"
				gridRow="1/3"
				gridColumn="2"
			/>
		</Grid>
	);
};

export default QuoteImage;
