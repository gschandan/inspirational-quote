import React, { useEffect, useContext } from "react";
import { Heading, Box } from "@chakra-ui/layout";
import { API_URL } from "../config";
import { QuoteContext } from "./Context";

const Quote = () => {
	const { reload, setReload, author, setAuthor, quoteText, setQuoteText } =
		useContext(QuoteContext);

	useEffect(() => {
		if (reload) {
			const getQuote = async () => {
				const result = await fetch(API_URL + "random");
				const data = await result.json();
				setQuoteText(data.quote);
				setAuthor(data.author);
			};
			getQuote();
			setReload(false);
		}
	}, [setReload, reload, setAuthor, setQuoteText]);

	return (
		<Box
			// position="absolute"
			// top="20%"
			// left="15%"
			gridRow="1/2"
			gridColumn="1"
			// alignSelf="flex-end"
			// justifySelf="flex-end"
		>
			<Heading
				zIndex="10"
				position="relative"
				left="calc(2vh + 2vw)"
				top="30vh"
				fontSize="calc(1vh + 2vw)"
				width="calc(50vh - 5vw)"
			>
				{quoteText}
			</Heading>
			<Heading
				zIndex="10"
				position="absolute"
				left="35vw"
				top="50vh"
				fontSize="calc(1vh + 1vw)"
			>
				{author}
			</Heading>
		</Box>
	);
};

export default Quote;
