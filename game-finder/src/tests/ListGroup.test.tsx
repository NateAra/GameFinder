// import { render, screen } from "@testing-library/react";
// import ListGroup from "../components/ListGroup";

// describe("List Group", () => {
//   it("render 5 list items", () => {
//     render(<ListGroup />);
//     const listitem = screen.getAllByRole("listitem");
//     expect(listitem).toHaveLength(5);
//   });
//   it("handles click events on list items", () => {
//     render(<ListGroup />);
//     let cities = ["Trondheim", "Oslo", "Asmera", "Tokyo", "London"];
//     const consoleLogMock = jest.spyOn(console, 'log');

//     cities.forEach((city, index) => {
//       const listitem = screen.getByText(city);
//       listitem.click();
//       expect(consoleLogMock).toHaveBeenCalledWith(city, index);
//     });
//     consoleLogMock.mockRestore;
//   });
// });
