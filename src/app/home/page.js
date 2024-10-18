import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-start items-center">
        <div className="mt-5 w-3/4">
          <p className="font-semibold text-xl">Home</p>
          <div className="flex flex-col gap-4 text-gray-300">
            <p>
              I am an ambitious and detail-oriented Information Systems student at Singapore Management University. With
              a solid foundation in software engineering, data management, and web application development, I have
              developed a diverse skill set through hands-on experience and impactful projects.
            </p>
            <p>
              During my internships, I have honed my technical abilities by building scalable solutions and optimizing
              performance. At Starstruck, I created a data scraping pipeline in AWS that automated tasks, significantly
              reducing time and enhancing efficiency. <br />
              My role at JobWiz involved transitioning API calls, which resulted in an 83% cost reduction, while also
              improving user experience through critical client-facing page development in Nuxt.js.
            </p>
            <p>
              I thrive in collaborative environments and have a passion for developing innovative solutions. My
              projects, such as a microservices-based bidding platform and an upskilling recommendation AI, reflect my
              proficiency in modern frameworks and technologies like React.js, Python, and AWS.
            </p>
            <p>
              With strong programming skills in languages such as Python and JavaScript, alongside expertise in
              frameworks like Node.js and React, I am eager to contribute to impactful projects and continue my journey
              in the tech industry.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-semibold text-xl">Tech stack used for this</p>
            <ul className="text-gray-300 list-disc">
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Zustand</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
