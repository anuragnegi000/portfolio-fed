import React from 'react';
import sangeet from '../assets/images/sangeet-music-desktop-ui.png';
import engding from '../assets/images/engding-thumb.png';
import tototimer from '../assets/images/tototimer.svg';

const Projects = () => {
  const works = [
    {
      title: 'iGraphixs',
      description: 'Client Work an E-commerce Platform Where GFX and VFX are been sell. [React, Tailwind CSS]',
      code: '',
      live: 'https://www.igraphixs.com/',
      stack: 'React, Tailwind CSS, Framer Motion',
      thumbnail: "https://i.ibb.co/gdqcR7D/i-Graphixs-landing.png",
    },
    {
      title: 'Mahakaal-Yogpeeth',
      description: 'Client Work, A Yoga school in Rishikesh, [React,Tailwind CSS]',
      code: '',
      live: 'https://mahakaal-yogpeeth-fed.vercel.app/',
      stack: 'React,Tailwind CSS, Framer ',
      thumbnail: "https://i.ibb.co/gdBvzgb/Mahkaal.png",
    },
    {
      title: 'Thoughts',
      description: 'A Platform where everyone can share their Thoughts',
      code: 'https://github.com/vikrammahto/engding',
      live: 'https://vikrammahto.github.io/engding/',
      stack: 'React,Tailwind CSS,PostgresSQL,Hono(Backend)',
      thumbnail: "https://c4.wallpaperflare.com/wallpaper/864/770/356/minimalism-think-lightbulb-simple-background-wallpaper-preview.jpg",
    },  
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 hover:border-zinc-200 rounded-2xl"
          >
            <img
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="object-cover w-full h-auto rounded-2xl"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <p>{work.stack}</p>
              <div className="flex flex-row items-center w-full">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Live{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-devices"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg ms-3 hover:bg-zinc-900 hover:text-white"
                >
                  Source Code{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
