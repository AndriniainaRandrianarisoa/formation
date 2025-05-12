export class DomService {
    /**
     * Sélecteur rapide d'élément dans le DOM.
     * @param selector - Sélecteur CSS
     * @returns L'élément correspondant ou null
     */
    select<T extends HTMLElement = HTMLElement>(selector: string): T | null {
      return document.querySelector<T>(selector);
    }
  
    /**
     * Création et insertion d'un nouvel élément dans le DOM.
     * @param tagName - Nom de la balise (div, span, etc.)
     * @param parent - Éventuel parent où injecter l'élément
     * @param innerText - Contenu texte (facultatif)
     * @returns L'élément créé
     */
    createElement(
      tagName: keyof HTMLElementTagNameMap,
      parent?: HTMLElement,
      innerText?: string
    ): HTMLElement {
      const el = document.createElement(tagName);
      if (innerText) {
        el.innerText = innerText;
      }
      if (parent) {
        parent.appendChild(el);
      }
      return el;
    }
  
    /**
     * Méthode utilitaire pour vider le contenu d'un élément.
     * @param element - L'élément à nettoyer
     */
    clearElement(element: HTMLElement): void {
      element.innerHTML = '';
    }
  }
  