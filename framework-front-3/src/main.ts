import './style.css'; 

import { RouterService } from './services/RouterService';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Navbar } from './components/Navbar';

// Instanciation du Routeur
const router = new RouterService();

Navbar();

// Enregistrement des routes
router.register('#/home', () => HomePage());
router.register('#/about', () => AboutPage());

// Navigation par défaut si aucun hash n’est défini
if (!window.location.hash) {
  router.navigate('#/home');
} else {
  // Si on a déjà un hash dans l'URL, on déclenche manuellement le handle
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}
