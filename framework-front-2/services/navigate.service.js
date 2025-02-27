class Navigate {
  constructor(rootElement) {
      this.root = document.querySelector(rootElement);
      this.routes = new Map();

      // Gérer le bouton retour du navigateur
      window.addEventListener('popstate', () => {
          this.render(window.location.pathname);
      });
  }

  // Ajouter une route
  add(path, view) {
      this.routes.set(path, view);
      return this;
  }

  // Naviguer vers une route
  to(path) {
      window.history.pushState({}, '', path);
      return this.render(path);
  }

  // Rendre la vue
  render(path) {
      const view = this.routes.get(path) || (() => '<h1>404 Page non trouvée</h1>');
      this.root.innerHTML = view();
      return this;
  }

  // Démarrer le routeur
  start() {
      document.addEventListener('click', e => {
          if (e.target.matches('[data-link]')) {
              e.preventDefault();
              this.to(e.target.getAttribute('href'));
          }
      });

      // Rendre la page initiale
      this.render(window.location.pathname);
      return this;
  }
}





// <!DOCTYPE html>
// <html>
// <head>
//     <title>Simple Router</title>
// </head>
// <body>
//     <!-- Navigation -->
//     <nav>
//         <a href="/" data-link>Accueil</a>
//         <a href="/about" data-link>À propos</a>
//         <a href="/contact" data-link>Contact</a>
//     </nav>

//     <!-- Contenu de la page -->
//     <div id="app"></div>

//     <script>
//         // Définir les vues
//         const views = {
//             home: () => `
//                 <h1>Accueil</h1>
//                 <p>Bienvenue sur la page d'accueil</p>
//             `,
//             about: () => `
//                 <h1>À propos</h1>
//                 <p>Page à propos de nous</p>
//             `,
//             contact: () => `
//                 <h1>Contact</h1>
//                 <p>Contactez-nous</p>
//             `
//         };

//         // Initialiser le routeur
//         const router = new Navigate('#app');

//         // Configurer les routes
//         router
//             .add('/', views.home)
//             .add('/about', views.about)
//             .add('/contact', views.contact)
//             .start();
//     </script>
// </body>
// </html>