export class HttpService {
    /**
     * Méthode GET pour récupérer des données d'une API.
     * @param url - URL de l'API
     */
    async get<T>(url: string): Promise<T> {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Status: ${response.status}`);
      }
      return response.json() as Promise<T>;
    }
  
    /**
     * Méthode POST pour envoyer des données à une API.
     * @param url - URL de l'API
     * @param body - Données à envoyer
     */
    async post<T>(url: string, body: any): Promise<T> {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Status: ${response.status}`);
      }
      return response.json() as Promise<T>;
    }
  
    // Vous pouvez ajouter d'autres méthodes (PUT, DELETE, etc.) au besoin.
  }
  