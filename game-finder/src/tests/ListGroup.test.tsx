import { render, screen } from "@testing-library/react";
import ListGroup from "../components/ListGroup";

describe("List Group", () => {
  it("render 5 list items", () => {
    render(<ListGroup />);
    
    const listitem = screen.getAllByRole('listitem');
    expect(listitem).toHaveLength(5);
  });
});
