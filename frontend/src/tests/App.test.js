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
	test("Button linking to the home page", async () => {
		render(<App />);
		const home = await screen.findByRole("button", { name: /Home/i });
		expect(home).toBeInTheDocument();
	});
	test("Button for a random quote", async () => {
		render(<App />);
		const random = await screen.findByRole("button", { name: /Random/i });
		expect(random).toBeInTheDocument();
	});
	test("Button linking to the add quote functionality", async () => {
		render(<App />);
		const add = await screen.findByRole("button", { name: /Add/i });
		expect(add).toBeInTheDocument();
	});
	test("Button linking to the help page", async () => {
		render(<App />);
		const help = await screen.findByRole("button", { name: /Help/i });
		expect(help).toBeInTheDocument();
	});
});
