import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders the logo", () => {
	render(<App />);
	const logo = screen.getByAltText("epigram logo");
	expect(logo).toBeInTheDocument();
});
