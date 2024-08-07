import {http, HttpResponse} from "msw"

export const handlers = [
  http.get("https://1c43b7bf-fc44-42b7-93dd-2214ecf5044d-00-30brp1rw4if78.worf.replit.dev/notes", () => {
    return HttpResponse.json([{
      id: "1",
  title: "A test response from MSW mock",
  createdAt: "Mon Aug 05 2024 12:34:56 GMT-0700 (Pacific Daylight Time)",
  updatedAt: "Mon Aug 05 2024 12:34:56 GMT-0700 (Pacific Daylight Time)",
    }])
  })
]

