"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { inView, motion, useInView } from "framer-motion"
const projectsdata = [
    {
        id: 1,
        title: "Next.js Blog Website",
        desccription: "Project 1 description",
        image: "/images/projects/img1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previousUrl: "/"
    },
    {
        id: 2,
        title: "JavaScript Portfolio Website",
        desccription: "Project 2 description",
        image: "/images/projects/img2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previousUrl: "/"
    },
    {
        id: 3,
        title: "Next.js Portfolio Website",
        desccription: "Project 3 description",
        image: "/images/projects/img3.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previousUrl: "/"
    },
    {
        id: 4,
        title: "React Portfolio Website",
        desccription: "Project 4 description",
        image: "/images/projects/img4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previousUrl: "/"
    },
    {
        id: 5,
        title: "Next.js Portfolio Website",
        desccription: "Project 5 description",
        image: "/images/projects/img5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previousUrl: "/"
    },
    {
        id: 6,
        title: "HTML & CSS  Website",
        desccription: "Project 6 description",
        image: "/images/projects/img6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previousUrl: "/"
    },
];
const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, {once: true});
  const handleTagChange = (newTag) =>
  {
    setTag(newTag);
  };
  const filteredProjects = projectsdata.filter((project) =>
    project.tag.includes(tag)
);
const cardVariants = {
  initial: {y: 50, opacity: 0},
  animate: {y: 0, opacity: 1},
};
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag  
          onClick={ handleTagChange} 
          name="All" 
          isSelected={tag === "All"} 
        />
        <ProjectTag  
          onClick={ handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
        <ProjectTag  
          onClick={ handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"} 
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInview ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4}}
              >
                  <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    description={project.desccription}
                    imgUrl={project.image}
                    tag={project}
                    gitUrl={project.gitUrl}
                    previousUrl={project.previousUrl}
                  />
              </motion.li> 
            ))}
      </ul>
    </section>
  )
}

export default Projects
