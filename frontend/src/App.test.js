import { render, screen } from "@testing-library/react";
import logoSVG from "./assets/Logo.svg";
import Lightbulb from "./assets/8.svg";
import QuoteImage from "./assets/notebook_quill.png";
import App from "./App";

//Sidebar

describe("Renders the logo", () => {
	render(<App />);
	const logo = screen.getByAltText("epigram logo");
	test("Alt text present on the logo", () => {
		expect(logo).toBeInTheDocument();
	});
	test("The correct logo image is selected", () => {
		expect(logo).toHaveAttribute("src", logoSVG);
	});
});

describe("Renders the Sidebar Links", () => {
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

// describe("Renders the lightbulb", () => {
// 	render(<App />);
// 	const lightbulb = screen.getAllByAltText("inspirational-lightbulb");
// 	test("The correct image is selected", () => {
// 		expect(lightbulb[0]).toHaveAttribute("src", Lightbulb);
// 	});
// });

describe("Renders the notebook", () => {
	render(<App />);
	const notebook = screen.getAllByRole("img", { name: "notebook" });
	test("The correct image is selected", () => {
		expect(notebook[0]).toHaveAttribute("src", QuoteImage);
	});
});
