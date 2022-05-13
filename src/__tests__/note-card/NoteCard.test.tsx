import { render } from "@testing-library/react"
import NoteCard from "components/note-card/NoteCard"
import {faker} from "@faker-js/faker";

const cardData = {
	title: "This is a cool card",
	description: faker.lorem.paragraph(3),
	url: "http://cool.website.com"
}

describe("<NoteCard />", () => {
	
	
	it("renders correctly", () => {
            const {container, debug} = render(<NoteCard note={cardData}/>)
	    const text = container.querySelector('div')
	    expect(text?.textContent).toContain("This is a cool card")
	})
})