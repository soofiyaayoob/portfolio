function About() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
    "Redux",
    "Immer",
    "React Query",
    "SEO Optimization",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16"
      data-section="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* About Me */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold border-l-4 border-yellow-500 pl-4">
            About Me
          </h2>
          <p className=" leading-relaxed">
            I’m Faathimath Soofiya, a passionate web developer. Beyond writing
            clean and efficien t code using Java, Spring Boot, React, Next.js,
            Tailwind CSS, and Docker, I bring a problem-solving mindset and a
            keen eye for scalable, SEO-friendly solutions. What sets me apart is
            my dedication to deeply understanding business goals and turning
            complex challenges into smooth, user-centric digital experiences.
            Always eager to learn and innovate, I strive to deliver impactful
            digital products that help businesses grow and succeed.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-r-full shadow hover:bg-yellow-600 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4">
            Skills
          </h3>
<ul className="flex flex-wrap gap-4 items-center ">
  {skills.map((skill) => (
    <li
      key={skill}
      className="text-gray-400 border border-gray-300 px-4 py-2 rounded-full text-sm font-semibold"
    >
      {skill}
    </li>
  ))}
</ul>


        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4">
            Experience
          </h3>
          <div>
            <h4 className="text-xl font-semibold">Java Full-Stack Intern</h4>
            <p className="text-yellow-600 font-medium">July 2024 – June 2025</p>
            <p className="mt-2 tracking-wide font-thin">
             Applied Java and Spring Boot to develop and test RESTful APIs, ensuring efficient data handling with PostgreSQL.
Gained practical exposure to Docker for containerization, improving application portability and deployment.
Focused on writing clean, maintainable code while strengthening problem-solving and backend development skills.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4">
            Education
          </h3>
          <div>
            <h4 className="text-xl font-semibold">
              BCA (Bachelor of Computer Applications)
            </h4>
            <p className="text-yellow-600 font-medium">
              IGNOU University — 2024 to 2027 (expected)
            </p>
            <p className="mt-2 tracking-wide font-thin">
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
