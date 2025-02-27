// Framework.js
class DOMMap {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container ${selector} non trouvé`);
    }
  }

  // Méthode principale pour mapper les données
  map(data, template) {
    if (!Array.isArray(data)) {
      throw new Error("Les données doivent être un tableau");
    }

    // Vider le conteneur avant d'ajouter les nouveaux éléments
    this.clear();

    // Créer et ajouter les éléments
    data.forEach((item, index) => {
      const element = template(item, index);
      if (typeof element === "string") {
        const div = document.createElement("div");
        div.innerHTML = element;
        this.container.appendChild(div.firstChild);
      } else if (element instanceof HTMLElement) {
        this.container.appendChild(element);
      }
    });

    return this;
  }

  // Méthode pour créer un élément HTML
  createElement(tag, attributes = {}, content = "") {
    const element = document.createElement(tag);

    // Gérer les attributs
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "class") {
        element.className = value;
      } else if (key.startsWith("on")) {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    });

    // Gérer le contenu
    if (content) {
      element.innerHTML = content;
    }

    return element;
  }

  // Vider le conteneur
  clear() {
    this.container.innerHTML = "";
    return this;
  }

  // Ajouter une classe au conteneur
  addClass(className) {
    this.container.classList.add(className);
    return this;
  }

  // Retirer une classe du conteneur
  removeClass(className) {
    this.container.classList.remove(className);
    return this;
  }
}

// Helper function pour créer une instance
function createMap(selector) {
  return new DOMMap(selector);
}
