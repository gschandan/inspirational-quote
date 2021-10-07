import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders the heading", () => {
	render(<App />);
	const headingElement = screen.getByText(/epigram/i);
	expect(headingElement).toBeInTheDocument();
});
