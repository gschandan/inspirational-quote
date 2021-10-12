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
		<>
			<Heading
				zIndex="10"
				position="absolute"
				left="20%"
				right="40%"
				top="40%"
				fontSize="4xl"
			>
				{quoteText}
			</Heading>
			<Heading
				zIndex="10"
				position="absolute"
				left="40%"
				right="10%"
				top="60%"
				fontSize="2xl"
			>
				{author}
			</Heading>
		</>
	);
};

export default Quote;
