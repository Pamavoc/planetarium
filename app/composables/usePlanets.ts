import type { Planet, CreatePlanetPayload, UpdatePlanetPayload, ApiResponse } from '@/types/planet';

export const usePlanets = () => {
  /**
   * Récupère toutes les planètes.
   */
  const fetchPlanets = async (): Promise<Planet[]> => {
    try {
      const { status, data } = await $fetch<{ status: number; data: Planet[] }>('/api/planets');
      if (status !== 200) throw new Error('Erreur du serveur');
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des planètes :', error);
      throw error;
    }
  };

  /**
   * Récupère une planète par son UUID.
   */
  const fetchPlanetByUUID = async (uuid: string): Promise<Planet> => {
    try {
      const { status, data } = await $fetch<{ status: number; data: Planet }>(`/api/planets/${uuid}`);
      if (status !== 200) throw new Error('Planète introuvable ou erreur du serveur');
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération de la planète :', error);
      throw error;
    }
  };

  /**
   * Crée une nouvelle planète.
   */
  const createPlanet = async (payload: CreatePlanetPayload): Promise<any> => {
    try {
      const { status, data } = await $fetch<ApiResponse>('https://planetarium-gamma.vercel.app/api/planets/create', {
        method: 'POST',
        body: payload,
      });
      if (status !== 201) throw new Error('Erreur du serveur');
      return data;
    } catch (error) {
      console.error('Erreur lors de la création de la planète :', error);
      throw error;
    }
  };

  /**
   * Met à jour une planète.
   */
  const updatePlanet = async (uuid: string, payload: UpdatePlanetPayload): Promise<Planet> => {
    try {
      const { status, data } = await $fetch<ApiResponse>(`/api/planets/${uuid}`, {
        method: 'PATCH',
        body: payload,
      });
      if (status !== 200) throw new Error('Erreur du serveur');
      return data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la planète :', error);
      throw error;
    }
  };

  /**
   * Supprime une planète.
   */
  const deletePlanet = async (uuid: string): Promise<string> => {
    try {
      const { status, body } = await $fetch<{ status: number; body: { message: string } }>(`/api/planets/${uuid}`, {
        method: 'DELETE',
      });
      if (status !== 200) throw new Error('Erreur du serveur');
      return body.message;
    } catch (error) {
      console.error('Erreur lors de la suppression de la planète :', error);
      throw error;
    }
  };

  return { fetchPlanets, fetchPlanetByUUID, createPlanet, updatePlanet, deletePlanet };
};
