import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import LloydsLogo from "public/work/Lloyds-logo.jpeg";
import QTechLogo from "public/work/QTech-logo.jpeg";
import JTechLogo from "public/work/JTech-logo.jpeg";


import dronerace from "public/gallery/drone-race.png";
import prayer from "public/gallery/prayer.png"

export const metadata: Metadata = {
  title: "About | Muhammed Qureshi",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="lg:hidden mb-8">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={dronerace}
            alt={"Drone race at Excel London"}
            width={324}
            height={139}
            className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={prayer}
            alt={"Prayer"}
            width={220}
            height={260}
            className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48 h-[15rem]"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m Muhammed Qureshi!</p>

            <p>
            I have a passion for coding and making a meaningful impact through my work.
            </p>
            <p>
              In addition to coding, I&apos;m gearing up to launch my own{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/"
              >
                YouTube
              </Link>{" "}
              channel, where I&apos;ll be sharing content related to computer science and personal development.
            </p>
            <p>
              When I&apos;m not at my desk, you&apos;ll likely find me working out, playing football,
              or spending time at my local mosque.
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:muhammedhasanaliq@gmail.com" >
                email me
              </Link>
              . Try finding me anywhere else at @muhammedq
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              {new Date().getFullYear() - 2021}+ years of professional
              development experience.
            </p>
            <p>
            Talented Software Engineer specializing in JavaScript, React, Node.js, Python, and AWS. 
            Demonstrated success in web development and cybersecurity. 
            Actively seeking roles to leverage skills and contribute to transformative projects.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Junior Software Engineer",
    company: "JTech Global GmbH",
    time: "Nov, 2021 -",
    imageSrc: JTechLogo,
    link: "https://www.jtech-global.com/",
  },
  {
    title: "Cybersecurity Intern",
    company: "Lloyds Bank",
    time: "Oct, 2022 - Nov, 2022",
    imageSrc: LloydsLogo,
    link: "https://www.lloydsbank.com/",
  },
  {
    title: "Web Developer",
    company: "QTech Engineers",
    time: "May, 2021 - Jul, 2021",
    imageSrc: QTechLogo,
    link: "/",
  },
];