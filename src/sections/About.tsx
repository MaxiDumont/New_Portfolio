import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { Tech } from "@/components/Tech";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";

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
                title="My Reading List"
                description="Explore the books that have shaped my thinking and inspired me."
              />
              <div className="w-40 mx-auto mt-8">
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
              <Toolbox Items={toolboxitems} className="mt-6" />
              <Toolbox
                Items={toolboxitems}
                className="mt-6  "
                itemsWrapperClassName="-translate-x-1/2"
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
              <div className="relative flex-1">
                {hobbies.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.Emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/*card separetor*/}

            <Card className="h-[320px] p-0 relative col-span-2">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileEmoji} alt="smile emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
