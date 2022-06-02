import { faker } from "@faker-js/faker";

function createNote() {
  return {
    id: faker.random.alphaNumeric(),
    title: faker.lorem.lines(1),
    description: faker.lorem.text()
  };
}

export const notes = Array.from({ length: 10 }, createNote);

console.log(notes);
