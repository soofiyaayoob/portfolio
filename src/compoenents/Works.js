"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Full-Stack (Spring Boot + Java)",
      video: "/taam.mp4",
      description:
        "Developed a complete e-commerce platform for food delivery with support for multiple restaurants, user ordering, payments, and admin management. Production-ready e-commerce with payment integration, role-based admin panel, categories, products, orders, and analytics.",
      tags: ["Spring Boot", "Java", "Payment Integration", "Admin Panel"],
      link: "#",
      github: "#https://github.com/soofiyaayoob/-ecommerce-Spring-Boot/",
    },
    {
      id: 2,
      title: "UAE Supplier Brand",
      category: "Business Website (Next.js)",
      img: "/ppm.png",
      description:
        "Developed a responsive business website for a UAE supplier brand using Next.js and Tailwind CSS. The site features a modern UI, strong business branding, and is fully optimized for SEO to maximize online visibility. Fast-loading pages, smooth navigation, and Google Analytics integration allow effective monitoring of site performance, delivering a professional digital presence tailored to the client’s needs.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "SEO",
        "Fast Loading",
        "Business Branding",
        "Google Analytics",
      ],
      link: "https://www.ppmgeneraltrading.com/",
      github: "https://github.com/soofiyaayoob/business-website-ppm/",
    },
    {
      id: 3,
      title: "Hotstar-style Movie Explorer",
      category: "React App",
      img: "/hotstsar.png",
      description:
        "Movie search/browse experience with hover previews, watchlist, and responsive grid. Built in React.",
      tags: ["React", "TMDB API", "Hover Cards"],
      link: "#https://movie-searching-in-react.vercel.app/",
      github: "https://github.com/soofiyaayoob/movie-searching_InReact",
    },
    {
      id: 4,
      title: "Web Design System & Site",
      category: "Design / React",
      img: "/demo.png",
      description:
        "A clean UI kit and marketing site built in React with thoughtful UX, spacing scale, and component library.",
      tags: ["React", "Design System", "UX", "ModernTool"],
      link: "https://web-demo-ashy.vercel.app/",
      github: "#https://github.com/soofiyaayoob/busines-web-demo",
    },
    {
      id: 5,
      title: "Business Website",
      category: "Business Website (HTML/CSS)",
      img: "/cool.png",
      description:
        "The design focuses on modern layout, clear typography, and intuitive navigation. The site highlights key business information, product/service sections, and ensures a smooth user experience across devices. Emphasis on professional styling, consistent color palette, and easy-to-read content.",
      tags: ["HTML", "CSS", "Responsive Design"],
      link: "https://responsive-design-taupe.vercel.app/",
      github: "https://github.com/soofiyaayoob/responsive-Design",
    },
    {
      id: 6,
      title: "Business Site",
      category: "WordPress",
      img: "",
      description: "Coming soon",
      tags: ["WordPress"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="works" data-section="works" className="py-20 text-[#D3D9A7]">
      <div className="mx-auto px-6 text-center">
        <h2
          className="uppercase tracking-widest text-md font-semibold"
          style={{ color: "#D9C99A" }}
        >
          Recent Works
        </h2>
        <p className="text-3xl font-bold mt-2" style={{ color: "#D3D9A7" }}>
          A few projects I’m proud of
        </p>
        <p
          className="mt-3 text-md max-w-2xl mx-auto"
          style={{ color: "#D3D9A7" }}
        >
          Full-stack builds, high-performance business websites, React apps, and
          WordPress implementations.
        </p>
      </div>
      <div className="mx-auto px-6 mt-12 flex flex-col gap-16">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row items-center gap-8 rounded-2xl p-6 shadow-lg"
            style={{ backgroundColor: "#D3D9A7", color: "#415936" }}
          >
            <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  preload="auto"
                />
              ) : p.img ? (
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[#3A592C]/20 animate-pulse flex items-center justify-center">
                  <span className="text-[#415936] text-md">
                    Image coming soon
                  </span>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#415936" }}
              >
                {p.title}
              </h3>
              <p className="text-sm" style={{ color: "#415936" }}>
                {p.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: "#D9C99A",
                      color: "#415936",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                  style={{ color: "#415936" }}
                >
                  View Project
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                    style={{ color: "#415936" }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
