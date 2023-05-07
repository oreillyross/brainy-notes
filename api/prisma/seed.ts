import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const ross = await prisma.user.upsert({
    where: { email: "ross@home.com" },
    update: {},
    create: {
      email: "ross@home.com",
      name: "Ross",
      notes: {
        create: {
          title: "My first note",
          detail: "Some detail in the note",
        },
      },
    },
  });
}
