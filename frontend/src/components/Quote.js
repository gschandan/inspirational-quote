import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/layout";
import { API_URL } from "../config";

const Quote = ({ reload, setReload }) => {
	const [quoteText, setQuoteText] = useState(
		"I may not have gone where I intended to go, but I think I have ended up where I needed to be"
	);
	const [author, setAuthor] = useState("Douglas Adams");

	useEffect(() => {
		const getQuote = async () => {
			const result = await fetch(API_URL + "random");
			const data = await result.json();
			setQuoteText(data.quote);
			setAuthor(data.author);
		};
		getQuote();
		setReload(false);
	}, [setReload, reload]);

	return (
		<Container position="absolute" top="30%" right="45%" width="60vh">
			<Heading
				zIndex="10"
				position="relative"
				left="30%"
				right="40%"
				top="30%"
				fontSize="4xl"
			>
				{quoteText}
			</Heading>
			<Heading
				zIndex="10"
				position="relative"
				left="80%"
				top="70%"
				fontSize="2xl"
			>
				{author}
			</Heading>
		</Container>
	);
};

export default Quote;
