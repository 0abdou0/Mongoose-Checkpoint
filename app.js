// PACKAGES :

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const questionRouter = require("./api/question/router");
const sondageRouter = require("./api/sondage/router");

// Pour connecter la base de donnees
const mongoose = require("mongoose");

// Pour utiliser les variable d'environnements
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2000;

// Etablir la connexion a la base de données et le serveur backend
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// On affiche un message une fois que la base est connectée
db.once("open", () => console.log("Connected to database !!"));

// MIDDLEWARES :
// Pour lire les données en JSON
app.use(express.json());

// Pour afficher les requetes qui arrivent au server sur la console
app.use(morgan("combined"));

// Pour la sécurité
app.use(helmet());

// Pour le cross origin server error
app.use(cors());

app.use("/quetion", questionRouter);
app.use("/sondage", sondageRouter);
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
