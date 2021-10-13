import React, { useState, createContext } from "react";

export const QuoteContext = createContext();

const QuoteContextProvider = (props) => {
	const [reload, setReload] = useState(false);
	const [addHidden, setAddHidden] = useState(false);

	return (
		<QuoteContext.Provider
			value={{
				reload,
				setReload,
				addHidden,
				setAddHidden,
			}}
		>
			{props.children}
		</QuoteContext.Provider>
	);
};
export default QuoteContextProvider;
