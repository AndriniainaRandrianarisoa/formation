// ÉTAPE 1 : Types de base
let albumName: string = "Super Mario";
let price: number = 59.99;
let inStock: boolean = true;
let releaseDate: Date = new Date("2023-10-20");

// ÉTAPE 2 : Tableaux
let genres: string[] = ["Pop", "Rock", "Jazz"];
let ratings: number[] = [8, 9, 7, 10];

// ÉTAPE 3 : Interface simple
const simpleAlbum2: Exemple = {
  title: "21",
  artist: "Adele",
  price: 19.99,
  inStock: false
};

interface Exemple {
  title: string;
  artist: string;
  price: number;
  inStock: boolean;
  id?: number;
}

// ÉTAPE 4 : Interface plus complexe

const album1: album1 = [
  {
    id: 1,
    title: "Abbey Road",
    artist: "The Beatles",
    price: 29.99,
    inStock: true,
    genres: ["Rock", "Pop", "Psychedelic Rock"],
    ratings: [5, 4, 5, 5, 4],
    format: "VINYL",
    description: "The last recorded album by The Beatles",
    year: 1969,
    songs: [
      "Come Together",
      "Something",
      "Maxwell's Silver Hammer",
      "Here Comes The Sun",
      "Because"
    ],
    status: "PUBLISH"
  }
];

enum StockEnum {
  publish = "PUBLISH",
  private = "PRIVATE"
}

interface Exemple2 {
  id: number;
  title: string;
  artist: string;
  price: number;
  inStock: boolean;
  genres: string[];
  ratings: number[];
  format: string;
  description: string;
  year: number;
  songs: string[];
  status: "PRIVATE" | "PUBLISH";
}

type album1 = Exemple2[];

enum StatusEnum {
  PUBLISH,
  PRIVATE
}




let longueur: number | null= 10 ;
let largeur: number | null  = 30;

function affiche(): void {
  console.log("coucou");
}

function calculVolume(longueur: number, largeur: number): number | null {
  const result = longueur * largeur;
  return result;
}


async function calculVolume2(longueur: number, largeur: number): Promise<number | null> {
  try {
    const result = longueur * largeur;
    return result;
  } catch {}
 
}

// parametre
// sortie



// 1. Exemple simple avec des props basiques

interface interfaceExemple {
  text: string;
  onClick: (param:number) => number;
  color?: string;  
}


