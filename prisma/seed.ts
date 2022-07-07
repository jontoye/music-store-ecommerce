import { PrismaClient } from '@prisma/client';
import { categories } from '../data';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: categories,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
