import { defineEventHandler } from 'h3';
import prisma from '~~/prisma/prisma';

export default defineEventHandler(async () => {

  try {
    const planets = await prisma.planet.findMany({
      include: {
        appearance: true,
        stats: true,
      },
    });

    return { status: 200, data: planets };
  } catch {
    return createError({ statusCode: 500, statusMessage: 'Error creating planet' });
  }
});