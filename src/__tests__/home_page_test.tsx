import { render, screen } from "@testing-library/react"
import { LandingPage } from "pages/Landing"
import UnauthenticatedApp from "pages/UnAuthenticatedApp"
import { BrowserRouter  as Router} from "react-router-dom"

test('on initial render splash component displays', () => {
    render(<Router><UnauthenticatedApp/></Router>)
    expect(screen.getByRole("heading",{name: /quick capture/i})).toBeDefined()
    expect(screen.getByRole("heading",{name: /easy access/i})).toBeDefined()
    expect(screen.getByRole("heading",{name: /quick capture/i})).toBeDefined()
})


