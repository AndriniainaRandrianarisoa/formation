import { DomService } from '../services/DomService';

export function Navbar() {
  const domService = new DomService();

  // Sélectionne l'élément nav (on suppose qu'il existe dans index.html)
  const nav = domService.select('#nav');
  if (!nav) return;

  // On vide le contenu actuel de #nav
  domService.clearElement(nav);

  // Lien vers la Home
  const homeLink:any = domService.createElement('a', nav, 'Accueil');
  homeLink.href = '#/home';


  // Lien vers About
  const aboutLink:any = domService.createElement('a', nav, 'À propos');
  aboutLink.href = '#/about';
}
