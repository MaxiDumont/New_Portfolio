"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/Book.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import mapImage2 from "@/assets/images/map2.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";
import {motion } from "framer-motion";
import { useRef } from "react";


const toolboxitems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    Emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    Emoji: "🌍",
    left: "50%",
    top: "5%",
  },
  {
    title: "Cooking",
    Emoji: "🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "gaming",
    Emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Photography",
    Emoji: "📸",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    Emoji: "📚",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const contrainRef = useRef(null);
  return (
    <div className="">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2 mb-8">
              <CardHeader
                title="My Favorite Book"
                description=" End? No, the journey doesn't end here. Death is just another path, one that we all must take. The grey rain-curtain of this world rolls back, and all turns to silver glass, and then you see it."
              />
              <div className="w-40 mx-auto mt-2">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>

            {/*card separetor*/}

            <Card className="h-[320px] p-0 md:col-span-3 ">
              <CardHeader
              title="My Toolbox"
              description="Discover the tools that help me build."
              className="px-6 pt-6"
              />
              <Toolbox Items={toolboxitems} className="mt-6"  itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <Toolbox
              Items={toolboxitems}
              className="mt-6"
              itemsWrapperClassName="translate-x-full animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          {/*card separetor*/}
          <div className="md:grid md:grid-cols-5 gap-8 ">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 mb-8 ">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realms."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={contrainRef}>
                {hobbies.map((item, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={contrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.Emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/*card separetor*/}

            <Card className="h-[320px] p-0 relative col-span-2">
              <a href="https://www.google.com/maps/place/R%C3%B8dovre+Stationsvej+52,+2610+R%C3%B8dovre,+Dinamarca/@55.6584117,12.4584574,13.53z/data=!4m15!1m8!3m7!1s0x4652511399d32da5:0xa00afcc1d5073b0!2sR%C3%B8dovre,+Dinamarca!3b1!8m2!3d55.673514!4d12.465726!16s%2Fg%2F122z32tb!3m5!1s0x4652514c1bbc8687:0xf044c6e147b14e45!8m2!3d55.6652446!4d12.4562056!16s%2Fg%2F11h2n2hk0c?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <Image
                src={mapImage2}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 -z-10 animate-ping [animation-duration:2s]" > </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 -z-10 " > </div>
                <Image src={smileEmoji} alt="smile emoji" className="size-20" />
              </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
