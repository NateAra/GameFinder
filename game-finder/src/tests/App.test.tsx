import { render, screen } from "@testing-library/react";
import App from "../App";

describe("app", () => {
  it('renders the headline', () => {
    render(<App/>);
    const headline = screen.getByText(/List/i);
    expect(headline).toBeInTheDocument();
  });

  it('render all the list', () => {
    render
  });
});
