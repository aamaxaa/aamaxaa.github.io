import React from "react";
import ProjectCard from "../components/projectCard";
import "../css/styles.css";

function Projects() {
  const projects = [{
    title: "Portfolio Website",
    description: "Welcome to my personal portfolio. This platform is designed to showcase my previous experiences and projects, offering a comprehensive insight into my professional journey and the skills I've developed along the way. Stay tuned here to see the latest updates on what I’ve been working on and my professional developments.",
    repoLink: "https://github.com/aamaxaa/aamaxaa.github.io",
  }, {
    title: "GDP Growth Visualization",
    description: "This is a website that is designed to show the GDP growth of different countries over the years. The data is visualized using a line graph and a bar graph. The user can select the country and the year range to see the GDP growth of the selected country over the selected years. The data is fetched from the World Bank API. The website is built using HTML, CSS, and JavaScript. The website is responsive and can be viewed on different devices.",
    repoLink: "https://github.com/aamaxaa/GDP-Growth-Visual",
  }, {
    title: "Movie Watchlist",
    description: "Movie Watchlist is an application designed to help movie enthusiasts keep track of movies they've watched, along with their personal ratings and the movie's summary from IMDb. This tool aims to provide a personal movie database where users can quickly recall their opinions on films and share their recommendations with friends.",
    repoLink: "https://github.com/aamaxaa/Movie-Watchlist",
  }, {
    title: "Music Player",
    description: "A simple retro music player that allows users to play, pause, skip and import their own songs. The user can also adjust the volume and see the progress of the song. The music player is built using HTML, CSS, and JavaScript. The website is responsive and can be viewed on different devices.",
    repoLink: "https://github.com/aamaxaa/a4-creative-coding",
  }];
  return (
    <div className="container mt-4">
        <div className="row d-flex justify-content-center"> {/* Added justify-content-center for better center alignment of cards */}
          {projects.map((project, index) => (
            <div key={index} className="p-3 col-md-6 d-flex justify-content-center "> {/* Changed w-0 to w-100 to ensure the div takes full width as needed */}
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
  );
  
}
export default Projects;
