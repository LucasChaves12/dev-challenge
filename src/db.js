const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(`postgres://postgres:postgres@localhost/Challenge`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// read all files in the models directory

fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// define all models
modelDefiners.forEach((model) => model(sequelize));

// Capitalize the first letter of the model name
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Database relations
const { Actors, Directors, Movies, Shows, Seasons, Episodes } = sequelize.models;

Movies.belongsTo(Directors);
Directors.hasMany(Movies);

Shows.belongsTo(Directors);
Directors.hasMany(Shows);

Episodes.belongsTo(Seasons);
Seasons.hasMany(Episodes);

Episodes.belongsTo(Shows);
Shows.hasMany(Episodes);

Seasons.belongsTo(Shows);
Shows.hasMany(Seasons);

Actors.belongsToMany(Movies, { through: "ActorsMovies" });
Movies.belongsToMany(Actors, { through: "ActorsMovies" });

Actors.belongsToMany(Shows, { through: "ActorsShows" });
Shows.belongsToMany(Actors, { through: "ActorsShows" });

// export the sequelize connection

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
