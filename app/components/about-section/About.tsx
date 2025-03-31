import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import ContraButton from "./ContraButton";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I build scalable and performant full-stack applications
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in creating <span className="font-bold">robust business solutions</span> that{" "}
            <span className="font-bold">drive growth</span> and{" "}
            <span className="font-bold">enhance user experience</span>. Whether it's a{" "}
            <span className="font-bold">high-performance web application</span> or{" "}
            <span className="font-bold">scalable backend services</span>, I specialize in building{" "}
            <span className="font-bold">end-to-end solutions</span> that make an impact.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            From writing my first lines of code back from undergrad days to now, I have
            continuously <span className="font-bold">refined my development skills</span>, expanding from{" "}
            <span className="font-bold">frontend engineering</span> into{" "}
            <span className="font-bold">backend systems, database management, and API integrations</span>.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique, and I ensure that I learn and grow through each one. I aim to{" "}
            <span className="font-bold">deliver efficient, scalable, and maintainable solutions</span>. Wanna learn
            more? Here&apos;s             <Link
              className="underline"
              href={"https://drive.google.com/file/d/1kvYD6PDUh3hUnG5JyEsMc34dd7skGLCt/view?usp=sharing"}
            >
              MY RESUME
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Technologies
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript (ES6+), TypeScript, React, Next.js, Redux, Redux Toolkit, React Query, HTML5, Git/GitHub, React
              Hook Form, Formik.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend Technologies
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node.js, NestJS, Express.js, PostgreSQL, MongoDB, Redis, WebSockets, RESTful APIs, GraphQL.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              DevOps & Cloud
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
            Docker, AWS (EC2), Vercel, Firebase
            </AnimatedBody>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        <ContraButton />
      </div> */}
    </section>
  );
}
