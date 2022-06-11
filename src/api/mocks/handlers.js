import { rest } from "msw";

export const handlers = [
	rest.get("/notes", (req, res, ctx) => {
            return res(ctx.status(200),
	           ctx.json({
			   id: "123",
			   title: "This is a mocked response",
			   description: "A great mocked description"
		   })   
	    )
	})

];


