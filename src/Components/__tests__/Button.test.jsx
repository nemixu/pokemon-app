import Button from "../Button";
import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Button.jsx", () => {
    it("should render correctly", () => {
        render(<Button label="test" className="btn"/>);
        const button = screen.getByRole("button");
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(button).toHaveClass("btn");
    });

    it("Should be rendered as disabled", ()=> {
        render(<Button isDisabled />);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    })

    it("Should be rendered as enabled", ()=> {
        render(<Button isDisabled={false} />);
        const button = screen.getByRole("button");
        expect(button).toBeEnabled();
    })

    it("should  click handlewhen called", () => {
        const mockClickHandler = jest.fn();
        render(<Button handleClick={mockClickHandler}/> );
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    })
})