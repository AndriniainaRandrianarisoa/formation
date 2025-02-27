class TableMap {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container ${selector} not found`);
    }
  }

  createTable(data, columns) {
    // Créer la table
    const table = document.createElement("table");

    // Créer l'en-tête
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    columns.forEach((column) => {
      const th = document.createElement("th");
      th.textContent = column.label;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Créer le corps
    const tbody = document.createElement("tbody");

    data.forEach((item) => {
      const row = document.createElement("tr");

      columns.forEach((column) => {
        const td = document.createElement("td");
        if (column.template) {
          // Si un template est fourni, l'utiliser
          td.innerHTML = column.template(item[column.key], item);
        } else {
          // Sinon, afficher la valeur directement
          td.textContent = item[column.key];
        }

        // Ajouter des classes si spécifiées
        if (column.class) {
          td.className = column.class;
        }

        // Ajouter des événements si spécifiés
        if (column.onClick) {
          td.addEventListener("click", () => column.onClick(item));
        }

        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Vider et ajouter la nouvelle table
    this.container.innerHTML = "";
    this.container.appendChild(table);

    return this;
  }

  addStyles(styles) {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return this;
  }
}

// Helper function
function createTableMap(selector) {
  return new TableMap(selector);
}
