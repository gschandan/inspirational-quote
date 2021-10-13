import { Img } from "@chakra-ui/image";
import { Container, Grid } from "@chakra-ui/layout";
import React, { useContext } from "react";
import QuoteImageContainer from "../assets/notebook.png";
import Quill from "../assets/quill.png";
import AddQuote from "./AddQuote";
import Quote from "./Quote";
import { QuoteContext } from "./Context";

const QuoteContainer = () => {
	const { addHidden } = useContext(QuoteContext);

	return (
		<Grid
			position="relative"
			gridTemplateColumns="3fr 1fr"
			placeItems="center"
		>
			<Img
				src={QuoteImageContainer}
				alt="notebook"
				boxSize="80vh"
				objectFit="contain"
				gridRow="1/3"
				gridColumn="1"
				alignSelf="center"
				justifySelf="center"
			/>
			<Quote />
			<Img
				src={Quill}
				alt="quill"
				boxSize="80vh"
				objectFit="contain"
				gridRow="1/3"
				gridColumn="2"
			/>
			<Container gridRow="3" display={addHidden ? "flex" : "none"}>
				<AddQuote />
			</Container>
		</Grid>
	);
};

export default QuoteContainer;
