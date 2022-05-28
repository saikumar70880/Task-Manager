const notFound = (req, res) => res.status(404).send("Resources doesn't exist!");
module.exports = notFound;
