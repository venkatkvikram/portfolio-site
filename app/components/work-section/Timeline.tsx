"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/axzora.png",
    jobTitle: "Full Stack Engineer",
    company: "Axzora",
    jobType: "Full time",
    duration: "Sep 2023 - Present",
    stuffIDid: [
      "Developed and maintained backend services for multiple projects, ensuring robust and scalable architecture",
      "Used NestJs and MySQL for a highly efficient backend system, integrating JWT and Keycloak for authentication and authorization.",
      "Designed and implemented REST APIs to handle complex business logic, interacting with MySQL databases for managing transactional data.",
      "Used Node.js and MongoDB for a full-stack application, ensuring seamless integration between backend services and the front-end.",
      "Optimized database queries to reduce latency and improve response time, ensuring efficient data storage and retrieval.",
      "Applied RESTful principles for API design to ensure scalability, maintainability, and readability.",
      "Used Prometheus and Grafana for performance monitoring, tracking API performance, and ensuring service uptime.",
    ],
  },
  {
    companyImg: "/softveer.png",
    jobTitle: "Jr. Full Stack Engineer",
    company: "Softveer Technologies",
    jobType: "Full time",
    duration: "Apr 2023 - Aug. 2023",
    stuffIDid: [
      "Developed the User Interface (UI) for Mobile-Homebuilder Dashboard using HTML5, CSS3, and JavaScript, enhancing responsiveness and user experience with React.js",
      "Built reusable components in React.js to increase code maintainability and optimize development time for the team.",
      "Utilized React-redux-toolkit for efficient global state management across the React application, improving performance and scalability.",
      "Implemented unit and integration tests using Jest.js to ensure code coverage, maintainability, and prevent regressions.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
