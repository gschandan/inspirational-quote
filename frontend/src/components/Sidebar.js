import { Button, ButtonGroup } from "@chakra-ui/button";
import { Flex, VStack } from "@chakra-ui/layout";
import {
	AiOutlineHome,
	AiOutlinePlusSquare,
	AiOutlineQuestionCircle,
} from "react-icons/ai";
import React from "react";
import Logo from "./Logo";

const Sidebar = () => {
	return (
		<Flex
			pos="sticky"
			left="5"
			h="100vh"
			w="30vw"
			boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
			flexDirection="column"
		>
			<Logo />
			<VStack>
				<Button
					leftIcon={<AiOutlineHome />}
					size="md"
					iconSpacing="2"
					variant="ghost"
				>
					Home
				</Button>
				<Button
					leftIcon={<AiOutlinePlusSquare />}
					size="md"
					iconSpacing="2"
					variant="ghost"
				>
					Add
				</Button>
				<Button
					leftIcon={<AiOutlineQuestionCircle />}
					size="md"
					iconSpacing="2"
					variant="ghost"
				>
					Help
				</Button>
			</VStack>
		</Flex>
	);
};

export default Sidebar;
