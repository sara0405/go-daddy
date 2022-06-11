import { render, screen } from "@testing-library/react";

import * as useForksHook from "../../../hooks/useForks";
import { Forks } from "../Forks";

const mockedUseRepoForks = jest.spyOn(useForksHook, "useRepoForks");

test("show loading spinner when data is loading", () => {
  mockedUseRepoForks.mockReturnValue({
    isLoading: true,
    forks: undefined,
    isError: undefined,
  });
  render(<Forks url={"url"} />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});

test("show data after it's available", () => {
  mockedUseRepoForks.mockReturnValue({
    isLoading: false,
    forks: [
      {
        id: 1,
        name: "forked_repo",
        full_name: "full_name/fork",
        private: false,
        html_url: "some/url",
        description: "forked repo",
        fork: true,
        languages_url: "url",
        forks_url: "url",
        issues_url: "url",
        watchers: 3,
      },
    ],
    isError: undefined,
  });
  render(<Forks url={"url"} />);
  expect(screen.getByText("full_name/fork")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", "some/url");
});

test("show multiple forks", () => {
  mockedUseRepoForks.mockReturnValue({
    isLoading: false,
    forks: [
      {
        id: 1,
        name: "forked_repo",
        full_name: "full_name/fork",
        private: false,
        html_url: "some/url",
        description: "forked repo",
        fork: true,
        languages_url: "url",
        forks_url: "url",
        issues_url: "url",
        watchers: 3,
      },
      {
        id: 2,
        name: "forked_repo",
        full_name: "full_name/fork_2",
        private: false,
        html_url: "some/url",
        description: "forked repo",
        fork: true,
        languages_url: "url",
        forks_url: "url",
        issues_url: "url",
        watchers: 3,
      },
    ],
    isError: undefined,
  });
  render(<Forks url={"url"} />);
  expect(screen.getByText("full_name/fork")).toBeInTheDocument();
  expect(screen.getByText("full_name/fork_2")).toBeInTheDocument();
});

test("show no data text when there are no forks", () => {
  mockedUseRepoForks.mockReturnValue({
    isLoading: false,
    forks: [],
    isError: undefined,
  });
  render(<Forks url={"url"} />);
  expect(screen.getByText("No forks")).toBeInTheDocument();
});

test("show error message if data fetching fails", () => {
  mockedUseRepoForks.mockReturnValue({
    isLoading: false,
    forks: undefined,
    isError: true,
  });
  render(<Forks url={"url"} />);
  expect(screen.getByText("Something went wrong...")).toBeInTheDocument();
});
