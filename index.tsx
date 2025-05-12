const beatlesDatabase = {
  bandName: "The Beatles",
  formed: {
    year: 1960,
    location: {
      city: "Liverpool",
      country: "England",
      historicVenue: "The Cavern Club"
    }
  },
  members: [
    {
      name: "John Lennon",
      instruments: ["Guitar", "Vocals", "Piano"],
      birthInfo: {
        date: "1940-10-09",
        place: "Liverpool"
      },
      isAlive: false,
      soloAlbums: [
        {
          name: "Imagine",
          year: 1971,
          tracks: [
            {
              title: "Imagine",
              duration: "3:03",
              mainInstrument: "Piano"
            }
          ]
        }
      ]
    }
  ],
  albums: [
    {
      name: "Abbey Road",
      releaseYear: 1969,
      producer: "George Martin",
      songs: [
        {
          title: "Come Together",
          mainVocalist: "John Lennon",
          duration: "4:19",
          songwriters: ["John Lennon", "Paul McCartney"],
          instruments: [
            {
              name: "Bass Guitar",
              playedBy: "Paul McCartney"
            }
          ]
        }
      ],
      studio: {
        name: "Abbey Road Studios",
        location: "London"
      }
    }
  ]
};

interface Album {
  name: string;
  releaseYear: number;
  producer: string;
  songs: Song[];
  studio: Studio;
}


interface Studio {
  name: string;
    location: string;
}

interface Song {
  title: string;
  mainVocalist: string;
  duration: string;
  songwriters: string[];
  instruments: Instrument[]
}

interface Instrument {
  name: string;
  playedBy:string;
}


