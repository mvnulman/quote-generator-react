import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import axios from "axios";
import App from "./App";

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

describe("App", () => {
  test("should renders the Quotes component", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        content: "Test quote",
        author: "Test author",
      },
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Quote of the Day")).toBeInTheDocument();
    });
  });

  test("should render the New Quote button", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        content: "Test quote",
        author: "Test author",
      },
    });

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /new quote/i })
      ).toBeInTheDocument();
    });
  });
});
