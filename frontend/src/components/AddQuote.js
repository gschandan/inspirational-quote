import {
	FormControl,
	FormLabel,
	Input,
	Button,
	useToast,
	Flex,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { API_URL } from "../config";
import { QuoteContext } from "./Context";

const AddQuote = () => {
	const { reload, setReload, setAuthor, setQuoteText } =
		useContext(QuoteContext);

	const [formAuthor, setFormAuthor] = useState("");
	const [formQuote, setFormQuote] = useState("");

	const toast = useToast();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(API_URL + "add", {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ quote: formQuote, author: formAuthor }),
		});
		const data = await response.json();
		console.log(data);
		setQuoteText(await data.quoteText);
		setAuthor(await data.author);
		setReload(!reload);
		toast({
			title: "Successfully submitted the quote",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
	};

	return (
		<Flex direction="column" alignItems="center" ml="3">
			<Flex direction="row" justifyContent="flex-start">
				<FormControl isRequired>
					<FormLabel>Quote</FormLabel>
					<Input
						type="text"
						placeholder="I had a dream..."
						width="45vw"
						onChange={(e) => setFormQuote(e.target.value)}
					/>
				</FormControl>
				<FormControl marginLeft="5" isRequired>
					<FormLabel>Author</FormLabel>
					<Input
						type="text"
						placeholder="M.L. King"
						width="10vw"
						onChange={(e) => setFormAuthor(e.target.value)}
					/>
				</FormControl>
			</Flex>
			<Button
				isDisabled={formAuthor && formQuote ? false : true}
				width="max-content"
				padding="5 5"
				mt="4"
				onClick={(e) => handleSubmit(e)}
			>
				Submit
			</Button>
		</Flex>
	);
};

export default AddQuote;
