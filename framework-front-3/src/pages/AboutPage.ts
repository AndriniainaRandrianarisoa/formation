import { DomService } from '../services/DomService';

export function AboutPage() {
    const domService = new DomService();
    
    const app = domService.select('#app');
    if (!app) return;

    // On vide ce qui était dans #app
    domService.clearElement(app);
    // Titre
    domService.createElement('h1', app, 'À propos');
    domService.createElement('p', app, 'Ici, quelques infos sur notre application.');
}
