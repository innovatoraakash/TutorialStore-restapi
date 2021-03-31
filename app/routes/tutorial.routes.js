module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  // Create a new Tutorial
  app.post("/tutorials", tutorials.create);

  // Retrieve all Tutorials
  app.get("/tutorials", tutorials.findAll);
  

  // Retrieve a single Tutorial with tutorialId
  app.get("/tutorials/:tutorialId", tutorials.findOne);

  // Update a Tutorial with tutorialId
  app.put("/tutorials/:tutorialId", tutorials.update);

  // Delete a Tutorial with tutorialId
  app.delete("/tutorials/:tutorialId", tutorials.delete);

  // Create a new Tutorial
  app.delete("/tutorials", tutorials.deleteAll);
};
