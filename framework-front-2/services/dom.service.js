class DOMMap {
  constructor(selector) {
      this.container = document.querySelector(selector);
      if (!this.container) {
          throw new Error(`Container ${selector} not found`);
      }
  }

  map(data, template) {
      this.container.innerHTML = '';
      data.forEach((item, index) => {
          const element = template(item, index);
          this.container.appendChild(element);
      });
      return this;
  }

  createElement(tag, attributes = {}, content = '') {
      const element = document.createElement(tag);
      
      Object.entries(attributes).forEach(([key, value]) => {
          if (key === 'class') {
              element.className = value;
          } else if (key.startsWith('on')) {
              element.addEventListener(key.slice(2).toLowerCase(), value);
          } else {
              element.setAttribute(key, value);
          }
      });
      
      if (content) {
          element.innerHTML = content;
      }
      
      return element;
  }
}

// Function helper pour créer une instance
function createMap(selector) {
  return new DOMMap(selector);
}