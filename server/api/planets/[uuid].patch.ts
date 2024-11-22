import { defineEventHandler, getRouterParams, readBody } from 'h3';
import { z } from 'zod';
import { updatePlanetSchema } from '~~/server/schemas';

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);
  const body = await readBody(event);

  const validatedParams = z.object({ uuid: z.string().uuid() }).parse(params);

  const validatedBody = updatePlanetSchema.parse(body);

  const updatedPlanet = await prisma.planet.update({
    where: { uuid: validatedParams.uuid },
    data: {
      ...validatedBody,
      appearance: validatedBody.appearance
        ? { update: validatedBody.appearance }
        : undefined,
      stats: validatedBody.stats ? { update: validatedBody.stats } : undefined,
    },
    include: {
      appearance: true,
      stats: true,
    },
  });

  return { status: 200, data: updatedPlanet };
});