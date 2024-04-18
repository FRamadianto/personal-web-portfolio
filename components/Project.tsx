import React from "react";
import { ProjectCard, SectionHeading } from ".";
import { projectsData } from "@/lib/data";

const Project = () => {
  return (
    <section id="#projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;
