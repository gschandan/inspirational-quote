import { render, screen } from "@testing-library/react";
import logoPNG from "../assets/Logo.svg";
import App from "../App";

describe("Renders the logo", () => {
	render(<App />);
	const logo = screen.getByAltText("epigram logo");
	test("Alt text present on the logo", () => {
		expect(logo).toBeInTheDocument();
	});
	test("The correct logo image is selected", () => {
		expect(logo).toHaveAttribute("src", logoPNG);
	});
});

describe("Renders the Sidebar Links", () => {
	render(<App />);

	// const add = screen.getByRole("button", { name: /add/i });
	// const help = screen.getByRole("button", { name: /help/i });

	test("Button linking to the home page", async () => {
		const home = await screen.findByRole("button", { name: /home/i });
		expect(home).toBeInTheDocument();
	});
	// test("Button linking to the add quote functionality", () => {
	// 	expect(add).toBeInTheDocument();
	// });
	// test("Button linking to the help page", () => {
	// 	expect(help).toBeInTheDocument();
	// });
});
