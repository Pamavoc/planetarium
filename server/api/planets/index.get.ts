import { defineEventHandler } from 'h3';
import prisma from '~~/prisma/prisma';

export default defineEventHandler(async () => {
  const planets = await prisma.planet.findMany({
    include: {
      appearance: true,
      stats: true,
    },
  });

  return { status: 200, data: planets };
});