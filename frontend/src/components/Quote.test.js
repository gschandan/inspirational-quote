import Quote from "./Quote";
import { render } from "@testing-library/react";

const mockResponse = {
	quote: "Don't quote me on that",
	author: "James Testington",
};

beforeEach(() => {
	fetch.resetMocks();
});

describe("Displays the (mocked) fetched quote", () => {
	test("It should render the mocked quote", async () => {
		try {
			console.log(mockResponse, JSON.stringify(mockResponse));
			fetch.mockResponseOnce(JSON.stringify(mockResponse));
			const { findByText } = render(<Quote />);
			const text = await findByText(/Testington/i);
			expect(text).toBeInTheDocument();
		} catch (err) {
			console.log(err);
		}
	});
});
