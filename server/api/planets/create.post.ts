import { defineEventHandler, readBody } from 'h3';
import prisma from "~~/prisma/prisma"

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les données du corps de la requête
    const body = await readBody(event);

    // Validation des données via Zod
    const validatedData = planetSchema.parse(body);

    // Création de la planète dans la base de données
    const newPlanet = await prisma.planet.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        appearance: {
          create: validatedData.appearance, // Prisma gère automatiquement planetId
        },
        stats: {
          create: validatedData.stats, // Prisma gère automatiquement planetId
        },
      },
      include: {
        appearance: true,
        stats: true,
      },
    });


    return { status: 201, data: newPlanet };
  } catch (error) {
    return createError({ statusCode: 500, statusMessage: 'Error creating planet' });
  }
});
