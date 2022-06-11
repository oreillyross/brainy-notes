import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/user/:userId", (req, res, ctx) => {
    return res(
      ctx.json({
        firstName: "John",
        lastName: "Maverick",
      })
    );
  })
);



worker.start();
