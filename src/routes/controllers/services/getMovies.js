const { Movies, Actors, Directors } = require("../../../db");
const { Op } = require("sequelize");

const getMovies = async (req, res) => {
  const { name, year, genre, director, actor } = req.query;

  let query = {
    where: {},
    attributes: ["id", "name", "year", "genre", "description"],
    order: [["name", "ASC"]],
    include: [
      {
        model: Directors,
        attributes: ["name"],
        where: {},
        required: true,
      },
      {
        model: Actors,
        attributes: ["name"],
        where: {},
        required: true,
      },
    ],
  };
  //Filter by movie name
  if (name) {
    query.where = { ...query.where, name: { [Op.like]: `%${name}%` } };
  }
  //Filter by year
  if (year) {
    query.where = { ...query.where, year: year };
  }
  //Filter by genre
  if (genre) {
    query.where = { ...query.where, genre: genre };
  }
  //Filter by director's name
  if (director) {
    query.include[0].where = { ...query.include[0].where, name: { [Op.like]: `%${director}%` } };
  }
  //Filter by actor's name
  if (actor) {
    query.include[1].where = { ...query.include[1].where, name: { [Op.like]: `%${actor}%` } };
  }

  let movies = await Movies.findAll(query);

  movies = movies.map((movie) => {
    movie = {
      ...movie.dataValues,
      director: movie.dataValues.director.name,
      actors: movie.dataValues.actors.map((actor) => actor.dataValues.name),
    };
    const { Directors, Actors, ...rest } = movie;
    return rest;
  });
  movies = { ...movies };
  res.status(200).json(movies);
};

module.exports = getMovies;
