import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import SparkIcon from "../assets/icons/sparkle.svg";
import { OrbitHero } from "@/components/OrbitHero";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: "300px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <OrbitHero size={430} rotation={-14} shouldOrbit={true} OrbitDuration="30s" shouldSpin={true} spinDuration="20s">
          <SparkIcon className="size-8 text-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={440} rotation={-79} shouldOrbit={true} OrbitDuration="33s" shouldSpin={true} spinDuration="15s">
          <SparkIcon className="size-5 text-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={520} rotation={-41} shouldOrbit={true} OrbitDuration="36s" shouldSpin={true} spinDuration="15s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={530} rotation={178} shouldOrbit={true} OrbitDuration="39s" shouldSpin={true} spinDuration="15s">
          <SparkIcon className="size-10 text-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={550} rotation={20} shouldOrbit={true} OrbitDuration="42s" shouldSpin={true} spinDuration="10s">
          <StarIcon className="size-12 text-emerald-300" />
        </OrbitHero>
        <OrbitHero size={590} rotation={98} shouldOrbit={true} OrbitDuration="45s" shouldSpin={true} spinDuration="15s">
          <StarIcon className="size-8 text-emerald-300" />
        </OrbitHero>
        <OrbitHero size={650} rotation={-5} shouldOrbit={true} OrbitDuration="48s" shouldSpin={true} spinDuration="12s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={710} rotation={144} shouldOrbit={true} OrbitDuration="51s" shouldSpin={true} spinDuration="15s">
          <SparkIcon className="size-14 text-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={720} rotation={85} shouldOrbit={true} OrbitDuration="54s" shouldSpin={true} spinDuration="13s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </OrbitHero>
        <OrbitHero size={800} rotation={-72} shouldOrbit={true} OrbitDuration="57s" shouldSpin={true} spinDuration="18s">
          <StarIcon className="size-28 text-emerald-300" />
        </OrbitHero>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Memoji"
            className="w-40 h-40 rounded-full size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animated animate-ping "></div>
            </div>
            <div className="text-sm font-medium"> 
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming desing into functional, high-performing
            web application. Let´s discuss youi next project
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Get In Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};
