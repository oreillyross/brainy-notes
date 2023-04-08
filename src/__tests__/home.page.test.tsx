import { describe, test, expect    } from "vitest"
import { render, screen } from "@testing-library/react"
import { LandingPage } from "pages/Landing"
import UnauthenticatedApp from "pages/UnAuthenticatedApp"
import { BrowserRouter  as Router} from "react-router-dom"

describe('on initial render splash component displays', () => {
    render(<Router><UnauthenticatedApp/></Router>)
    expect(screen.getByRole("heading",{name: /quick capture/i})).toBeDefined()
    expect(screen.getByRole("heading",{name: /easy access/i})).toBeDefined()
    expect(screen.getByRole("heading",{name: /quick capture/i})).toBeDefined()
})


test('Login / Signup button is displayed', () => {
    render(<Router><LandingPage/></Router>)
    expect(screen.getByRole("link", {name: /Login or Sign Up/i})).toBeDefined()
})


