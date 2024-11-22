import { H3Event } from "h3"
import { z } from 'zod'
import prisma from "~~/prisma/prisma"

const querySchema = z.object({
    uuid: z.string().uuid()
})

export default defineEventHandler(async (event: H3Event) => {
    try {

        // on valide la requête envoyée par le client (on vérifie qu'on a bien un uuid)
        const query = await getValidatedQuery(event, querySchema.safeParse)

        // si on a pas, on renvoie une erreur
        if (query.success === false) {
            return sendError(event, createError({ statusCode: 422, data: query.error }))
        }

        // on récupère les données envoyées par le client
        const data = query.data

        // on récupère le planet correspondant à l'uuid envoyé par le client
        const planet = await prisma.planet.findUnique({
          where: { uuid: data.uuid },
          include: {
            appearance: true,
            stats: true,
          },
        });
    
        // si on a pas trouvé de planet, on renvoie une erreur
        if (!planet) {
          return createError({ statusCode: 404, statusMessage: 'Planet not found' });
        }
        
        // on renvoie la planete trouvée
        return { status: 200, data: planet };

      
    } catch (error: any) {

      return createError({ statusCode: 500, statusMessage: 'Error fetching planet' });
    }
})