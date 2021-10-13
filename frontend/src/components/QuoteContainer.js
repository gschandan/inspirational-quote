import { Img } from "@chakra-ui/image";
import { Container, Grid } from "@chakra-ui/layout";
import React from "react";
import QuoteImageContainer from "../assets/notebook.png";
import Quill from "../assets/quill.png";
import AddQuote from "./AddQuote";
import Quote from "./Quote";

const QuoteContainer = ({ reload, setReload, add, setAdd }) => {
	return (
		<Grid position="relative" gridTemplateColumns="3fr 1fr">
			<Img
				src={QuoteImageContainer}
				alt="notebook"
				boxSize="80vh"
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
				boxSize="80vh"
				objectFit="contain"
				gridRow="1/3"
				gridColumn="2"
			/>
			<Container
				gridRow="3"
				gridColumn="1/3"
				display={add ? "flex" : "none"}
			>
				<AddQuote />
			</Container>
		</Grid>
	);
};

export default QuoteContainer;
