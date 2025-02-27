type RouteHandler = () => void;

interface Route {
  path: string;
  handler: RouteHandler;
}

export class RouterService {
  private routes: Route[] = [];

  constructor() {
    // On écoute le changement de hash
    window.addEventListener('hashchange', () => {
      this.handleRouteChange();
    });
  }

  /**
   * Enregistrer une nouvelle route.
   * @param path - Chemin (ex: "#/home")
   * @param handler - Fonction à exécuter quand cette route est active
   */
  register(path: string, handler: RouteHandler): void {
    this.routes.push({ path, handler });
  }

  /**
   * Lance la navigation vers une route donnée.
   * @param path - Chemin (ex: "#/about")
   */
  navigate(path: string): void {
    window.location.hash = path;
  }

  /**
   * Fonction appelée sur chaque changement de hash.
   * On cherche la route correspondante et on exécute son handler.
   */
  private handleRouteChange(): void {
    const currentHash = window.location.hash; // ex: "#/home"
    const currentRoute = this.routes.find((r) => r.path === currentHash);

    if (currentRoute) {
      currentRoute.handler();
    } else {
      console.warn(`Aucune route trouvée pour ${currentHash}`);
    }
  }
}
