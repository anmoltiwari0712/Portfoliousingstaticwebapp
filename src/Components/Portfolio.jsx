/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A MotorBike Company's Website",
    description:
      "A basic website for a motorbike company,which allows its services to be accessed online.",
    url: "https://anmoltiwari0712.github.io/motorbikecomp.github.io/",
  },
  {
    title: "Blue Learn (Clone)",
    description:
      "BlueLearn is a student community that provides a one-stop platform for students to learn new skills, network with peers.",
    url: "https://anmoltiwari0712.github.io/BLUELEARN_CLONE.github.io/",
  },
  {
    title: "My Resume Site",
    description:
      "A Website Made With Html, Css, Javascript and Bootstrap to showcase my work.",
    url: "https://anmoltiwari0712.github.io/Portfolio/",
  },
  {
    title: "Simon Game",
    description:
      "The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.",
    url: "https://anmoltiwari0712.github.io/simongame.github.io/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
