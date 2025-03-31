import React, { useEffect } from "react";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import FolioCard from "../work-section/FolioCard";

export default function Projects() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Incubation Management Platform(Backend)",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      // liveLink: "https://offsetcomms.africa/",
      about:
        "Developed, an incubation management platform using React, NestJS, PostgreSQL, and WebSockets for real-time communication to streamline operations and enhance efficiency.Designing and implementing intuitive user interfaces allowing users to efficiently search for login, complete orders, and receive payments resulting in an enhanced user experience. Engineering the backend infrastructure, establishing seamless communication between the frontend and MongoDB database to ensure secure and efficient data storage and retrieval.",
      stack: ["Nest.js", "PostgreSQL", "JWT", "Websockets"],
      // img: "/offset-folio.svg",
    },
    // {
    //   title: "Shortly",
    //   gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
    //   liveLink: "https://lnk-shortener.netlify.app/",
    //   about:
    //     "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
    //   stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
    //   img: "/shortly.svg",
    // },
    {
      title: "Invoice Generator",
      gitLink: "https://github.com/venkatkvikram/React-Invoice-pdf-generator",
      liveLink: "https://react-invoice-pdf-generator-iaww3pkc9-venkatkvikram.vercel.app/",
      about:
        "A simple invoice generator app built using React where you can create and save invoices, add line items to your invoices, and view and download your invoices. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and convert it from canvas -> pdf.",
      stack: ["react", "JS-PDF", "javascript", "tailwindcss"],
      img: "/invoice-generator.png",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    // {
    //   title: "Multi-step form",
    //   gitLink: "https://github.com/adex-hub/multi-step-form-main",
    //   liveLink: "https://ade-loremgaming.netlify.app/",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("projects");
  }, [inView, setSectionInView]);

  return (
    <>
      <section className="flex flex-col gap-6 md:gap-10 pt-[110px]" ref={ref} id="projects">
        <Title>Projects</Title>
        {works.map((work, index) => (
          <FolioCard
            key={index}
            img={work.img}
            title={work.title}
            gitLink={work.gitLink}
            liveLink={work.liveLink}
            about={work.about}
            stack={work.stack}
          />
        ))}
      </section>
    </>
  );
}
