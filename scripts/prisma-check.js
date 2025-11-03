const { PrismaClient } = require('../node_modules/@prisma/client');

(async () => {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany();
    console.log('OK: users count =', users.length);
  } catch (e) {
    console.error('ERROR:', e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
