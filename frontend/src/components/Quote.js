import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/layout";
import { API_URL } from "../config";

const Quote = () => {
	const [quoteText, setQuoteText] = useState(
		"I may not have gone where I intended to go, but I think I have ended up where I needed to be"
	);
	const [author, setAuthor] = useState("Douglas Adams");

	useEffect(() => {
		fetch(API_URL + "random")
			.then((response) => response.json())
			.then((data) => {
				setQuoteText(data.quote);
				setAuthor(data.author);
			});
	}, []);

	return (
		<Container width="20vw">
			<Heading
				zIndex="10"
				position="absolute"
				left="10%"
				right="30%"
				top="30%"
				fontSize="4xl"
			>
				{quoteText}
			</Heading>
			<Heading
				zIndex="10"
				position="absolute"
				right="40%"
				bottom="40%"
				fontSize="2xl"
			>
				{author}
			</Heading>
		</Container>
	);
};

export default Quote;
