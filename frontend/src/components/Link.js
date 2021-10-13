import React, { useContext } from "react";
import { Button } from "@chakra-ui/button";
import { QuoteContext } from "./Context";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";

const Link = ({ text }) => {
	const { reload, setReload, addHidden, setAddHidden } =
		useContext(QuoteContext);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClick = (e) => {
		e.preventDefault();
		if (text === "Random Quote") {
			setReload(!reload);
		}
		if (text === "Add A Quote") {
			setAddHidden(!addHidden);
		}
		if (text === "Help") {
			onOpen();
		}
	};
	return (
		<>
			<Button
				size="lg"
				variant="ghost"
				textTransform="uppercase"
				letterSpacing="widest"
				fontWeight="200"
				width="100%"
				fontSize="lg"
				aria-label={`link to ${text}`}
				onClick={(e) => handleClick(e)}
			>
				{text}
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign="center">About Epigram</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={5}>
							<p>
								Epigram <i>[ ep-i-gram ]:</i> a pithy saying or
								remark expressing an idea in a clever and
								amusing way.
							</p>

							<ul>
								<li>
									Clicking random quote will load a random
									quote from the database.
								</li>
								<li>
									Clicking the add a quote link will bring up
									the functionality to add a quote to the
									databse. Both quote text and author fields
									are required.
								</li>
							</ul>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Link;
