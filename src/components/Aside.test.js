import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react";
import Aside from "./Aside"
render('render content', () => {

    const view = render(<Aside />)
    console.log(view)
})