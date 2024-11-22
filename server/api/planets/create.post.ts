import { defineEventHandler, readBody } from 'h3';
import { planetSchema } from '~~/server/schemas';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Body reçu :', body);

    const validatedData = planetSchema.parse(body);
    console.log('Données validées :', validatedData);

    const newPlanet = await prisma.planet.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        uuid: validatedData.uuid,
        appearance: {
          create: validatedData.appearance,
        },
        stats: {
          create: validatedData.stats,
        },
      },
      include: {
        appearance: true,
        stats: true,
      },
    });

    return { status: 201, data: newPlanet };
  } catch (error) {
    console.error('Erreur serveur :', error);
    return createError({ statusCode: 500, statusMessage: 'Error creating planet', data: error });
  }
});
