import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import {GiHumanPyramid} from "react-icons/gi"
import {BiTimer, BiCategory, BiSearch, BiPhoneCall} from "react-icons/bi"
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import CountNumbers from "@/components/home/countnumbers";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing TalentExpose
          </p>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Auto contacted by recruiters. Only in Malaysia.</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          Expose yourself to a pool of hungry and eager recruiters in Malaysia! Put your skills, experience and job history in this google sheet and wait for good news! :) 
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://forms.gle/9mjQbwUGo2JEaE4x5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Expose yourself now</p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "All job " ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Verified, quality recruiters",
    description:
      "Our recrutiers are from renowned, established companies in Malaysia. Includes Forbes 500 companies, startup unicorns, SMEs and founder companies.",
    demo: <WebVitals />,
  },
  {
    title: "Just wait for calls/emails",
    description:
      "Submit your resume once, and get auto contacted to a huge pool of recruiters eagerly looking out talents like you! You don't have to do anything else.",
    demo: (
      <BiPhoneCall size={100} className="text-orange-400"/>
    ),
  },
  {
    title: "Huge pool of recruiters",
    description:
      "Get chosen from a huge pool of recruiters actively searching our platform, to find the best matches for job vacancies! ",
    demo: (
      <CountNumbers />

    ),
  },
  {
    title: "All job categories",
    description:
      "Whether you're an accounting professional, or a developer searching for your next opportunity, we got you covered. All categories, we mean it.",
    demo: <BiCategory size={100} className="text-yellow-400"/>,
  },
  {
    title: "Let recruiters find you.",
    description:
      "Are you tired of browsing your LinkedIn job posts, reading long descriptive job posts from different job sites? You're in the right place.",
    demo: <BiSearch size={100} className="text-red-400"/>,
  },
];
