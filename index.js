const { conn, Actors, Directors, Movies, Shows, ActorsMovies, ActorsShows, Episodes, Seasons } = require("./src/db.js");
const server = require("./src/app.js");

const PORT = 3001;

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`);
    });
  })
  .then(() => {
    //Actors.bulkCreate(actorsArray);
    //Directors.bulkCreate(directorsArray);
    //Movies.bulkCreate(moviesArray);
    //Shows.bulkCreate(showsArray);
    //ActorsMovies.bulkCreate(actorsMovieArray);
    //ActorsShows.bulkCreate(actorsShowArray);
    //Seasons.bulkCreate(seasonsArray);
    //Episodes.bulkCreate(episodesArray);
  });

const directorsArray = [
  { name: "Lucas", age: "21", country: "Argentina" },
  { name: "nicolas zabattaro", age: "25", country: "Colombia" },
  { name: "Petri", age: "41", country: "Chile" },
];

const actorsArray = [
  { name: "Juan", age: "18", country: "Argentina" },
  { name: "Damian diego", age: "25", country: "España" },
  { name: "Franco A", age: "41", country: "Argentina" },
];

const moviesArray = [
  { name: "El señor de los anillos", year: "2001", genre: "Fiction", description: "El señor de los anillosss", directorId: 1 },
  { name: "El señor de los anillos 2", year: "2002", genre: "Fiction", description: "El señor de los anillosdsa 2", directorId: 1 },
  { name: "Que paso ayer", year: "2010", genre: "Humor", description: "asdasdasd", directorId: 2 },
];

const showsArray = [
  { name: "Simpsons", season: 12, episode: 320, year: "2001", genre: "Fiction", description: "Los simpsons", directorId: 2 },
  { name: "big Bang Theory", season: 7, episode: 210, year: "2002", genre: "Fiction", description: "Test123", directorId: 1 },
  { name: "Naruto", season: 2, episode: 32, year: "2010", genre: "Anime", description: "asdasdasd", directorId: 3 },
];

const actorsMovieArray = [
  { actorId: 1, movieId: 1 },
  { actorId: 2, movieId: 1 },
  { actorId: 3, movieId: 1 },
  { actorId: 2, movieId: 2 },
  { actorId: 3, movieId: 2 },
  { actorId: 1, movieId: 3 },
  { actorId: 3, movieId: 3 },
];

const actorsShowArray = [
  { actorId: 2, showId: 3 },
  { actorId: 3, showId: 3 },
  { actorId: 2, showId: 4 },
  { actorId: 1, showId: 5 },
  { actorId: 3, showId: 5 },
];

const seasonsArray = [
  { name: "Season 1", number: 1, showId: 3, year: 2001, NumberOfEpisodes: 12 },
  { name: "Season 2", number: 2, showId: 3, year: 2002, NumberOfEpisodes: 24 },
  { name: "Season 3", number: 3, showId: 3, year: 2008, NumberOfEpisodes: 12 },
  { name: "Season 1", number: 1, showId: 4, year: 2001, NumberOfEpisodes: 10 },
  { name: "Season 2", number: 2, showId: 4, year: 2002, NumberOfEpisodes: 13 },
  { name: "Season 3", number: 3, showId: 4, year: 2004, NumberOfEpisodes: 16 },
  { name: "Season 1", number: 1, showId: 5, year: 2001, NumberOfEpisodes: 25 },
  { name: "Season 2", number: 2, showId: 5, year: 2002, NumberOfEpisodes: 12 },
  { name: "Season 3", number: 3, showId: 5, year: 2003, NumberOfEpisodes: 8 },
];

const episodesArray = [
  { name: "Episode 1", seasonId: 15, showId: 3, description: "asdasd1", number: 1, year: 2001 },
  { name: "Episode 2", seasonId: 15, showId: 3, description: "asdasd2", number: 2, year: 2003 },
  { name: "Episode 3", seasonId: 15, showId: 3, description: "asdasd3", number: 3, year: 2007 },
  { name: "Episode 1", seasonId: 18, showId: 4, description: "asdasd1", number: 1, year: 2001 },
  { name: "Episode 2", seasonId: 18, showId: 4, description: "asdasd2", number: 2, year: 2002 },
  { name: "Episode 3", seasonId: 18, showId: 4, description: "asdasd3", number: 3, year: 2004 },
  { name: "Episode 1", seasonId: 21, showId: 5, description: "asdasd1", number: 1, year: 2001 },
  { name: "Episode 2", seasonId: 21, showId: 5, description: "asdasd2", number: 2, year: 2002 },
  { name: "Episode 3", seasonId: 21, showId: 5, description: "asdasd3", number: 3, year: 2003 },
];
