import Image from "next/image";

function About() {
  return (
    <section id="about" className="mx-auto px-6 py-16" data-section="about">

      <div className="flex flex-col lg:flex-row gap-12 items-start">
      
        <div className="space-y-4 flex-1">
          <h2
            className="text-3xl font-semibold pl-4"
            style={{ color: "#D9C99A", borderLeft: "4px solid #3A592C" }}
          >
            About Me
          </h2>
          <p
            className="leading-relaxed text-base tracking-widest"
            style={{ color: "#D3D9A7" }}
          >
            I’m Faathimath Soofiya, a passionate web developer from Kammur.
            Beyond writing clean and efficient code using Java, Spring Boot,
            React, Next.js, Tailwind CSS, and Docker, I bring a problem-solving
            mindset and a keen eye for scalable, SEO-friendly solutions. What
            sets me apart is my dedication to deeply understanding business
            goals and turning complex challenges into smooth, user-centric
            digital experiences. Always eager to learn and innovate, I strive to
            deliver impactful digital products that help businesses grow and
            succeed.
          </p>
          <a
            href="/soofiyaDeveloper.pdf"
            download
            className="inline-block font-semibold py-3 px-6 rounded-r-full shadow transition"
            style={{ backgroundColor: "#D9C99A", color: "#48643C" }}
          >
            Download Resume
          </a>
        </div>

        <div className="relative flex flex-1 w-full h-[350px] items-center justify-center">
          <Image
            src="/Iam.png"
            alt="Faathimath Soofiya"
            width={300}
            height={0}
            className="rounded-lg shadow-lg object-contain"
            style={{
              backgroundColor: "#D3D9A7",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start mt-16">
   
        <div className="space-y-4 flex-1">
          <h3
            className="text-2xl font-semibold pl-4"
            style={{ color: "#D3D9A7", borderLeft: "4px solid #3A592C" }}
          >
            Experience
          </h3>
          <div>
            <h4 className="text-xl font-semibold" style={{ color: "#D3D9A7" }}>
              Java Full-Stack Intern
            </h4>
            <p className="font-medium" style={{ color: "#D3D9A7" }}>
              July 2024 – June 2025
            </p>
            <p
              className="mt-2 tracking-wide font-thin"
              style={{ color: "#D3D9A7" }}
            >
              Applied Java and Spring Boot to develop and test RESTful APIs,
              ensuring efficient data handling with PostgreSQL. Gained practical
              exposure to Docker for containerization, improving application
              portability and deployment. Focused on writing clean, maintainable
              code while strengthening problem-solving and backend development
              skills.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4 flex-1">
          <h3
            className="text-2xl font-semibold pl-4"
            style={{ color: "#D3D9A7", borderLeft: "4px solid #3A592C" }}
          >
            Education
          </h3>
          <div>
            <h4 className="text-xl font-semibold" style={{ color: "#D3D9A7" }}>
              BCA (Bachelor of Computer Applications)
            </h4>
            <p className="font-medium" style={{ color: "#D3D9A7" }}>
              IGNOU University — 2024 to 2027 (expected)
            </p>
            <p
              className="mt-2 tracking-wide font-thin"
              style={{ color: "#D3D9A7" }}
            >
              Currently pursuing BCA, focusing on software development and
              full-stack technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
