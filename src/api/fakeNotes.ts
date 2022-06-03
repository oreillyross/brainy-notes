import { faker } from "@faker-js/faker";

const createNote = () => {
  return {
    id: faker.random.alphaNumeric(),
    title: faker.lorem.lines(1),
    description: faker.lorem.text(),
    created_at: faker.date.past(1),
    url: faker.internet.url(),
  };
};

const notes = Array.from({ length: 10 }, createNote);

export { notes };
