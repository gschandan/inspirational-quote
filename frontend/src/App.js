import { Grid } from "@chakra-ui/layout";
import { useState } from "react";
import Sidebar from "../src/components/Sidebar";
import QuoteContainer from "./components/QuoteContainer.js";

function App() {
	const [reload, setReload] = useState(false);
	const [addHidden, setAddHidden] = useState(false);

	return (
		<Grid gridTemplateColumns="1fr 3fr">
			<Sidebar
				reload={reload}
				setReload={setReload}
				add={addHidden}
				setAdd={setAddHidden}
			/>
			<QuoteContainer
				reload={reload}
				setReload={setReload}
				add={addHidden}
				setAdd={setAddHidden}
			/>
		</Grid>
	);
}

export default App;
