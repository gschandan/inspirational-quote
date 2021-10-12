import { Grid, Flex, Heading } from "@chakra-ui/layout";

import Sidebar from "../src/components/Sidebar";
import Quote from "./components/Quote";
import QuoteImage from "./components/QuoteImage.js";

function App() {
	return (
		<Grid gridTemplateColumns="1fr 3fr">
			<Sidebar />
			<QuoteImage />
			{/* <Quote /> */}
		</Grid>
	);
}

export default App;
