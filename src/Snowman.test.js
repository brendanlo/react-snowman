import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";


describe("test for max wrong guesses", function(){

    it("ends game after 6 wrong guesses", function(){
        const {container} = render(<Snowman/>);

        fireEvent.click(container.querySelector("button[value='b']"));
        fireEvent.click(container.querySelector("button[value='c']"));
        fireEvent.click(container.querySelector("button[value='d']"));
        fireEvent.click(container.querySelector("button[value='x']"));
        fireEvent.click(container.querySelector("button[value='y']"));
        fireEvent.click(container.querySelector("button[value='z']"));
        
        expect(container.querySelector("button[value='b']")).not.toBeInTheDocument();


    })



})