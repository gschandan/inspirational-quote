import { Grid } from "@chakra-ui/layout";
import Sidebar from "../src/components/Sidebar";
import QuoteContextProvider from "./components/Context";
import QuoteContainer from "./components/QuoteContainer.js";

function App() {
	return (
		<Grid gridTemplateColumns="1fr 3fr">
			<QuoteContextProvider>
				<Sidebar />
				<QuoteContainer />
			</QuoteContextProvider>
		</Grid>
	);
}

export default App;
