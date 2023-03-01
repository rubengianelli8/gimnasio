const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { role } = require("./data/role");
const { countries } = require("./data/country");
const { cities } = require("./data/city");

async function main() {
  try {
    // Clean exist tables
    await prisma.role.deleteMany();
    await prisma.city.deleteMany();
    await prisma.country.deleteMany();
    // Load data
    await prisma.role.createMany({ data: role });
    await prisma.country.createMany({ data: countries });
    await prisma.city.createMany({ data: cities });
  } catch (e) {
    console.error(e);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
