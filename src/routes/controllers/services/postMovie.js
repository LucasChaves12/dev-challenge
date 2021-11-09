const { Movies, Actors, Directors } = require("../../../db");

const postMovie = async (req, res) => {
  const { name, year, description, genre, actors, director } = req.body;
  const actorsId = [];
  // Search DirectorId by name
  const directorId = await Directors.findOne({ where: { name: director } });
  // Search ActorId by name
  await actors.split(", ").map((actor) => {
    Actors.findOne({ where: { name: actor } }).then((actor) => {
      id.push(actor.dataValues.id);
    });
  });
  // Insert Movie
  const newMovie = await Movies.create({
    name,
    year,
    description,
    genre,
  });
  // Insert Movie-Director
  await newMovie.setDirector(directorId.dataValues.id);
  // Insert Movie-Actors
  await newMovie.setActors(actorsId);
  res.status(200).json({
    message: "Movie added successfully",
    data: newMovie,
  });
};

module.exports = postMovie;
