import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create 25 users
  const users = await Promise.all(
    Array.from({ length: 25 }).map(() =>
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          address: faker.address.streetAddress() + ', ' + faker.address.city(),
          email: faker.internet.email(),
        },
      })
    )
  );

  // Create 50 products
  const products = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: parseFloat(faker.commerce.price()),
        },
      })
    )
  );

  // Generate 500 orders, each associated with a random user
  for (let i = 0; i < 500; i++) {
    // Randomly select a user for this order
    const randomUser = users[Math.floor(Math.random() * users.length)];
    await prisma.order.create({
      data: {
        userId: randomUser.id,
        fulfillmentStatus: faker.helpers.arrayElement([
          'Pending',
          'Shipped',
          'Delivered',
        ]),
        lineItems: {
          create: Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }).map(() => {
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            return {
              productId: randomProduct.id,
              quantity: faker.datatype.number({ min: 1, max: 3 }),
            };
          }),
        },
      },
    });
  }

  console.log('Database seeded with 25 users, 50 products, and 500 orders.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
