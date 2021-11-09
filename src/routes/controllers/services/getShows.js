const { Shows, Actors, Directors, Seasons, Episodes } = require("../../../db");
const { Op } = require("sequelize");

const getShows = async (req, res) => {
  const { episode, showName } = req.query;

  let query = {
    where: {},
    attributes: ["name", "description", "genre"],
    order: [["name", "ASC"]],
    include: [
      {
        model: Actors,
        attributes: ["name"],
        where: {},
      },
      {
        model: Directors,
        attributes: ["name"],
        where: {},
      },
      {
        model: Episodes,
        attributes: ["name", "number", "seasonId"],
        required: true,
        include: {
          model: Seasons,
          attributes: ["number"],
          where: {},
        },
      },
    ],
  };
  //Filter by showName
  if (showName) {
    query.where.name = {
      [Op.like]: `%${showName}%`,
    };
  }
  //Filter Show by episode
  if (showName && episode) {
    query.include[2].where = { ...query.include[2].where, name: { [Op.like]: `%${episode}%` } };
  }

  let shows = await Shows.findAll(query);

  shows = shows.map((show) => {
    show = {
      ...show.dataValues,
      actors: show.dataValues.actors.map((actor) => actor.dataValues.name),
      director: show.dataValues.director.name,
      episodes: show.dataValues.episodes.map((episode) => {
        return {
          ...episode.dataValues,
          season: episode.dataValues.season.dataValues.number,
        };
      }),
    };
    const { Directors, Actors, Seasons, Episodes, ...rest } = show;
    return rest;
  });
  shows = { ...shows };
  res.status(200).json(shows);
};

module.exports = getShows;
