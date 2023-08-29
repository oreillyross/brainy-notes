import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter as Router } from "react-router-dom"
import { LoginForm } from "./Login"

test("Login screen renders correctly", () => {
    render(<Router><LoginForm/></Router>)
    userEvent
    // screen.debug()
})