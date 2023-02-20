import Button from "../Button";
import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'

//rendering the button with screen.
describe("Button.jsx", () => {
    it("should render correctly", () => {
        render(<Button label="test" className="colour"/>);
        const button = screen.getByRole("button");
        // expect(screen.getByText("test")).toBeInTheDocument();
        // expect(button).toHaveClass("colour");
        expect(button).toMatchSnapshot();

    });

    it.skip("Should be rendered as disabled", ()=> {
        render(<Button isDisabled />);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
        screen.getByText("disabled");
        //expect(button).toHaveTextContent("disabled");
    })

    it("should increment the click value by 1", () => {
        //arrange
        const mockClickHandler = jest.fn();
        render(<Button handleClick={mockClickHandler}/> );
        const button = screen.getByRole("button");
        //act
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        //assert
        expect(screen.getByText("Clicked 3")).toBeInTheDocument();
        expect(mockClickHandler).toHaveBeenCalledTimes(3);
    

    })


})