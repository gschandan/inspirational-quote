import { Grid, Flex, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import Sidebar from "../src/components/Sidebar";
import Quote from "./components/Quote";
import QuoteImage from "./components/QuoteImage.js";

function App() {
	const [reload, setReload] = useState(false);

	return (
		<Grid gridTemplateColumns="1fr 3fr">
			<Sidebar setReload={setReload} />
			<QuoteImage reload={reload} setReload={setReload} />
		</Grid>
	);
}

export default App;
