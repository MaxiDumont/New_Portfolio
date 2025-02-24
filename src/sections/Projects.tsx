import darkSaasLandingPage from "@/assets/images/pro1.png";
import lightSaasLandingPage from "@/assets/images/pro2.png";
import aiStartupLandingPage from "@/assets/images/pro3.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Filify",
    year: "2023",
    title: "A movie website",
    results: [
      { title: "Designed a responsive UI with MUI components" },
      { title: "Improved site speed by 50%" },
      { title: "Added local storage support for saving favorites" },
    ],
    link: "https://movies-api-omega-one.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Old React Portfolio",
    year: "2023",
    title: "Personal Portfolio Website",
    results: [
      { title: "Integrated Sanity CMS for dynamic content management" },
      { title: "Optimized performance with lazy loading and code splitting" },
      { title: "Designed a fully responsive UI with React and Tailwind CSS" },
    ],
    link: "https://maximiliano-portfolio.netlify.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Laravel PHP Back-end",
    year: "2022",
    title: "User Management & Content System",
    results: [
      { title: "Implemented secure user authentication with Laravel Sanctum" },
      { title: "Ensured secure password hashing with Laravel's built-in security features" },
      { title: "Enabled private post creation with user-specific access control" },
    ],
    link: "https://github.com/MaxiDumont/Laravel-Back-end",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Result
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto ">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest
                text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4">
                    {project.title}
                  </h3>
                  <hr className="vorder-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4 ml-2" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
