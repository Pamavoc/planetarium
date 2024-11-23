import type { SurfaceType } from "@prisma/client";

export interface Appearance {
    color: string;
    texture?: string;
    size: number;
    brightness: number;
    surfaceType: SurfaceType;
}

export interface Stats {
    water: number;
    vegetation: number;
    atmosphere: number;
    temperature: number;
    gravity: number;
}

export interface Planet {
    uuid: string;
    name: string;
    description?: string;
    appearance?: Appearance;
    stats?: Stats;
}

export interface CreatePlanetPayload {
    name: string;
    description?: string;
    appearance?: Appearance;
    stats?: Stats;
}


export interface UpdatePlanetPayload {
    name?: string;
    description?: string;
    appearance?: Partial<Appearance>;
    stats?: Partial<Stats>;
}

export interface ApiResponse { status: number; data: Planet }