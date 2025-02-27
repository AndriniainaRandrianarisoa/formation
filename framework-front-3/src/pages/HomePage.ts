import { DomService } from '../services/DomService';
import { HttpService } from '../services/HttpService';

export async function HomePage(): Promise<void> {

    const httpService = new HttpService()
    const domService = new DomService();

    // Sélectionne l'élément racine #app
    const app = domService.select('#app');
    if (!app) return;

    // On vide ce qui était dans #app
    domService.clearElement(app);

    // Titre
    domService.createElement('h1', app, 'Bienvenue sur la page Home !');

    // Paragraphe
    domService.createElement('p', app, 'Voici un exemple de liste de Todos récupérés via fetch :');

    try {
        // Appel HTTP pour récupérer 5 todos
        const todos = await httpService.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');

        // Création d’une liste <ul> pour afficher les todos
        const ul = domService.createElement('ul', app);

        todos.forEach((todo) => {
            domService.createElement('li', ul, todo.title);
        });
        
    } catch (error) {
        console.error('Erreur lors du fetch :', error);
        domService.createElement('p', app, 'Impossible de charger les todos.');
    }
}
