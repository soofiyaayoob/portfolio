"use client";
import { motion } from "framer-motion";

const socials = [
  { name: "github", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { name: "whatsapp", url: "https://wa.me/yourphonenumber" },
  { name: "email", url: "mailto:your.email@example.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const socialVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const Intro = () => {
  return (
    <section
      data-section="intro"
      className="flex items-center box-border relative sm:py-30 py-5  max-w-full w-full"  style={{
    backgroundImage: `url('/bg.webp')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  
  }}
    >
      <div className="mx-auto px-4  max-w-full w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-10 justify-between items-center"
        >
          <div className="max-w-full md:max-w-[60%]">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="sm:w-12 w-5 h-0.5 bg-yellow-500 mr-4"></div>
                <span className="sm:text-lg">Hello World</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-xl md:text-4xl font-bold mb-6 tracking-wide"
            >
              I’m SOOFIYA — a dedicated{" "}
              <span className="text-yellow-500">Full Stack Web Developer</span>{" "}
              delivering scalable, efficient, and maintainable digital
              solutions.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 max-w-xl leading-relaxed"
            >
              I transform ideas into high-quality web applications with clean,
              optimized code, intuitive interfaces, and excellent user
              experience. Ready to bring value to your team and projects.
            </motion.p>
          </div>

          <motion.aside
            aria-label="Social media links"
            variants={containerVariants}
            className="writing-vertical-rtl break-words max-w-full "
          >
            <div className="md:space-y-5 space-x-5  justify-around">
              {socials.map(({ name, url }, index) => (
                <motion.a
                  key={name}
                  variants={socialVariants}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm font-medium whitespace-nowrap tracking-widest"
                  custom={index}
                >
                  {name}
                </motion.a>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
