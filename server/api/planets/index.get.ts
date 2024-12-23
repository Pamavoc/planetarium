import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {

  try {
    const planets = await prisma.planet.findMany({
      include: {
        appearance: true,
        stats: true,
      },
    });

    return { status: 200, data: planets };
  } catch (error) {
    return { status: 500, message: 'Internal Server Error' };
  }


});