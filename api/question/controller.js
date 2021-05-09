const Question = require("../../models/question"); //
const getQuestion = async (req, res) => {
  const { texte, choix, reponse } = req.query;

  const filters = {};
  const options = { sort: { createdAt: -1 } };
  if (texte) filters.texte = texte;
  if (choix) filters.choix = choix;
  if (reponse) filters.reponse = reponse;
  const questions = await Question.find(filters, "-_id -__v", options);
  res.status(200).send(questions);
};
