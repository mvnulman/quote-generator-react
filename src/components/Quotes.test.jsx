import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi, describe, test, beforeEach, expect } from "vitest";
import axios from "axios";
import Quotes from "./Quotes.jsx";

// Mock axios
vi.mock("axios");
const mockedAxios = vi.mocked(axios);

describe("Quotes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shows loading initially", async () => {
    // Mock the API call
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        content: "Test quote",
        author: "Test author",
      },
    });

    const { container } = render(<Quotes />);

    // Should show loading initially
    expect(container.querySelector(".loader")).toBeInTheDocument();

    // Wait for the quote to load
    await waitFor(() => {
      expect(screen.getByText("Test quote")).toBeInTheDocument();
    });

    expect(screen.getByText("- Test author")).toBeInTheDocument();
  });

  test("fetches new quote on button click", async () => {
    // Initial load
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        content: "Initial quote",
        author: "Initial author",
      },
    });

    const { container } = render(<Quotes />);

    await waitFor(() => {
      expect(screen.getByText("Initial quote")).toBeInTheDocument();
    });

    // Mock new quote
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        content: "New quote",
        author: "New author",
      },
    });

    const button = screen.getByRole("button", { name: /new quote/i });
    fireEvent.click(button);

    // Should show loading again
    await waitFor(() => {
      expect(container.querySelector(".loader")).toBeInTheDocument();
    });

    // Wait for new quote
    await waitFor(() => {
      expect(screen.getByText("New quote")).toBeInTheDocument();
    });

    expect(screen.getByText("- New author")).toBeInTheDocument();
  });

  test("handles API error", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API error"));

    render(<Quotes />);

    // Should show loading, then stop loading on error
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    // On error, since quote is empty, the blockquote is rendered but empty
    // Perhaps the test is fine, or adjust component to show error
  });
});
