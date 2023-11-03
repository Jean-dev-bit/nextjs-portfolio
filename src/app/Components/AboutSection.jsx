"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
const TAB_DATA = 
[
    {
        title: "skills",
        id:"skills",
        content :
        (
                <ul className="list-disc pl-2">
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailwindCSS</li>
                    <li>TypeScript</li>
                    <li>MongoDB</li>
                    <li>Prisma</li>
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>C, C++</li>
                </ul>
        )
    },
    {
        title: "education",
        id:"education",
        content :
        (
                <ul className="list-disc pl-2">
                    <li>Parakou University Institute and Technology (IUT/UP)</li>
                    <li>Porto-Novo Technical and Vocational High School</li>
                    <li>CEG Sèmè-Tchakou</li>
                    <li>CSP The Polygons of Mèdédjonou</li>
                </ul>
        )
    },
    {
        title: "certification",
        id:"certification",
        content :
        (
                <ul className="list-disc pl-2">
                    <li>ADJARRA Town Hall Internship Certificate</li>
                </ul>
        )
    }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }
  return <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
                src="/images/im3.jpg"
                alt="Une image-code"
                className="rounded-xl"
                width={500}
                height={500}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    I am full stack web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, ReactNative, HTML, CSS, and Git. 
                    I am a quick learner and I am always looking to expand my knowledge and skill set. 
                    I am a team player and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                   
                </div>
                <div className="mt-8">
                        {TAB_DATA.find((t) => (t.id === tab)).content}
                </div>
            </div>
        </div>
    
  </section>
  
}

export default AboutSection
