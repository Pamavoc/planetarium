import { defineEventHandler, getRouterParams } from 'h3';
import prisma from '~~/prisma/prisma';
import { z } from 'zod';

export default defineEventHandler(async (event) => {
  const querySchema = z.object({
    uuid: z.string().uuid()
  })

  try {

    const query = await getValidatedQuery(event, querySchema.safeParse)

    if (query.error) {
      return { status: 400, body: query.error.message }
    }

    const { uuid } = query.data;

    await prisma.planet.delete({
      where: { uuid: uuid },
    });

    return { status: 200, body: { message: 'Planet deleted' } }

  } catch (error) {

    return createError({ statusCode: 500, statusMessage: 'Can\'t delete planet' });

  }

});
