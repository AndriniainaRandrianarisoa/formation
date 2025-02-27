function add(a: number, b: number): number {
  return a + b;  // Erreur de compilation si mauvais type
}

const test = add(1, 2); // OK