import { z } from 'zod';
import {SurfaceType} from '@/prisma/generated/client';

// Schéma réutilisable pour l'apparence
const appearanceSchema = z.object({
    color: z.string(),
    texture: z.string().optional(),
    size: z.number().min(0.1),
    brightness: z.number().min(0).max(1),
    surfaceType: z.nativeEnum(SurfaceType)
});

// Schéma réutilisable pour les statistiques
const statsSchema = z.object({
    water: z.number().min(0).max(100),
    vegetation: z.number().min(0).max(100),
    atmosphere: z.number().min(0).max(1),
    temperature: z.number(),
    gravity: z.number().min(0),
});

// Schéma pour la création d'une planète
export const planetSchema = z.object({
    name: z.string(),
    uuid: z.string(),
    description: z.string().optional(),
    appearance: appearanceSchema,
    stats: statsSchema,
});

// Schéma pour la mise à jour d'une planète (toutes les propriétés sont optionnelles)
export const updatePlanetSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    appearance: appearanceSchema.partial(), // Rendre toutes les propriétés de "appearance" optionnelles
    stats: statsSchema.partial(), // Rendre toutes les propriétés de "stats" optionnelles
});
