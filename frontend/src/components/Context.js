import React, { useState, createContext } from "react";

export const QuoteContext = createContext();

const QuoteContextProvider = (props) => {
	const [reload, setReload] = useState(false);
	const [addHidden, setAddHidden] = useState(false);
	const [quoteText, setQuoteText] = useState(
		"I may not have gone where I intended to go, but I think I have ended up where I needed to be"
	);
	const [author, setAuthor] = useState("Douglas Adams");

	return (
		<QuoteContext.Provider
			value={{
				reload,
				setReload,
				addHidden,
				setAddHidden,
				quoteText,
				setQuoteText,
				author,
				setAuthor,
			}}
		>
			{props.children}
		</QuoteContext.Provider>
	);
};
export default QuoteContextProvider;
