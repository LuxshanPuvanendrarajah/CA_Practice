import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axiosMock from "axios";
import App from "../App";

afterEach(cleanup);

it("fetches and displays data", async () => {

  axiosMock.get.mockResolvedValueOnce({ data: [{ name: "John", id: 1 }, { name: "Paul", id: 2 }] });

  const { getByTestId, getAllByTestId } = render(<App />);

  expect(getByTestId("loading")).toHaveTextContent("Loading data...");

  const resolvedLis = await waitFor(() => getAllByTestId("resolved"));

  expect(resolvedLis.length).toEqual(2);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);

});

it(`throws an network error when the promise rejects without a response`, async () => {
  const errorMessage = `Network Error`;
  axiosMock.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

  const { getByTestId } = render(<App />);

  expect(getByTestId("loading")).toHaveTextContent("Loading data...");

  const resolvedError = await waitFor(() => getByTestId(`networkError`));

  expect(resolvedError).toHaveTextContent(`There was a Network Error`);
});

it(`throws displays a 404 error when the promise rejects with a response status of 404 and text of Not found`, async () => {
  const error = {
    response: {
      status: 404,
      statusText: `Not Found`
    }
  };

  axiosMock.get.mockImplementationOnce(() => Promise.reject(error));

  const { getByTestId } = render(<App />);

  expect(getByTestId("loading")).toHaveTextContent("Loading data...");

  const responseError = await waitFor(() => getByTestId(`responseError`));

  expect(responseError).toHaveTextContent(`There was an ${error.response.status} error: ${error.response.statusText}`);
})