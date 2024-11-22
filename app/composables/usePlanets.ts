import type { Planet, CreatePlanetPayload, UpdatePlanetPayload } from '@/types/planet';


export const usePlanets = () => {
  /**
   * Récupère toutes les planètes.
   */
  const fetchPlanets = async (): Promise<Planet[]> => {
    
    const { data, error } = await useFetch<{ status: number; data: Planet[] }>('/api/planets');
    if (error.value || !data.value) throw new Error('Erreur lors de la récupération des planètes');
    if (data.value.status !== 200) throw new Error('Erreur du serveur');
    return data.value.data;
  };

  /**
   * Récupère une planète par son UUID.
   */
  const fetchPlanetByUUID = async (uuid: string): Promise<Planet> => {
    const { data, error } = await useFetch<{ status: number; data: Planet }>(`/api/planets/${uuid}`);
    if (error.value || !data.value) throw new Error('Erreur lors de la récupération de la planète');
    if (data.value.status !== 200) throw new Error('Planète introuvable ou erreur du serveur');
    return data.value.data;
  };

  /**
   * Crée une nouvelle planète.
   */
  const createPlanet = async (payload: CreatePlanetPayload): Promise<Planet> => {
    const { data, error } = await useFetch<{ status: number; data: Planet }>('/api/planets/create', {
      method: 'POST',
      body: payload,
    });
    if (error.value || !data.value) throw new Error('Erreur lors de la création de la planète');
    if (data.value.status !== 201) throw new Error('Erreur du serveur');
    return data.value.data;
  };

  /**
   * Met à jour une planète.
   */
  const updatePlanet = async (uuid: string, payload: UpdatePlanetPayload): Promise<Planet> => {
    const { data, error } = await useFetch<{ status: number; data: Planet }>(`/api/planets/${uuid}`, {
      method: 'PATCH',
      body: payload,
    });
    if (error.value || !data.value) throw new Error('Erreur lors de la mise à jour de la planète');
    if (data.value.status !== 200) throw new Error('Erreur du serveur');
    return data.value.data;
  };

  /**
   * Supprime une planète.
   */
  const deletePlanet = async (uuid: string): Promise<string> => {
    const { data, error } = await useFetch<{ status: number; body: { message: string } }>(`/api/planets/${uuid}`, {
      method: 'DELETE',
    });
    if (error.value || !data.value) throw new Error('Erreur lors de la suppression de la planète');
    if (data.value.status !== 200) throw new Error('Erreur du serveur');
    return data.value.body.message;
  };

  return { fetchPlanets, fetchPlanetByUUID, createPlanet, updatePlanet, deletePlanet };
};
