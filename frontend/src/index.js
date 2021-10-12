import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "@fontsource/amatic-sc";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Amatic SC",
	},
});

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<CSSReset />
		<App />
	</ChakraProvider>,
	document.getElementById("root")
);
