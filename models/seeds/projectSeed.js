// Only run this file if change in the projectSchema occurs.

const mongoose = require("mongoose");
const projectSchema = require("../projects");

mongoose
  .connect("mongodb://127.0.0.1/projects")
  .then(() => {
    console.log("Connected to projects DB");
  })
  .catch((e) => console.log(e));

const Project = mongoose.model("Project", projectSchema);

const seedProject = new Project({
  title: "Portfolio Website",
  description:
    "Website developed from scratch to show the abilities and knowledge on Web Development technologies",
  technologies: [
    "HTML5",
    "CSS",
    "JavaScript",
    "mongoDB",
    "ejs",
    "express",
    "bootstrap5",
  ],
});

const seedCollection = async () => {
  await Project.deleteMany({});
  await seedProject.save();
};

seedCollection();
