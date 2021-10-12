import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
	useToast,
	Flex,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { API_URL } from "../config";

const AddQuote = () => {
	const [author, setAuthor] = useState("");
	const [quote, setQuote] = useState("");

	const toast = useToast();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(API_URL + "add", {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ quote, author }),
		});
		const data = await response.json();
		console.log(data);

		toast({
			title: "Successfully submitted the quote",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
	};

	return (
		<Flex direction="column" alignItems="center">
			<Flex direction="row">
				<FormControl isRequired>
					<FormLabel>Quote</FormLabel>
					<Textarea
						type="text"
						placeholder="I had a dream..."
						onBlur={(e) => setQuote(e.target.value)}
					/>
				</FormControl>
				<FormControl marginLeft="5" isRequired>
					<FormLabel>Author</FormLabel>
					<Input
						type="text"
						placeholder="M.L. King"
						onBlur={(e) => setAuthor(e.target.value)}
					/>
				</FormControl>
			</Flex>
			<Button
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
