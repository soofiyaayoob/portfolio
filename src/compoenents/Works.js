// app/components/Works.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Full-Stack (Spring Boot + Java)",
      img: "/images/portfolio/ecommerce.jpg",
      description:
        "Production-ready e-commerce with payment integration, role-based admin panel, categories, products, orders, and analytics.",
      tags: ["Spring Boot", "Java", "Payment Integration", "Admin Panel"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "UAE Supplier Brand – Website #1",
      category: "Business Website (Next.js)",
      img: "/images/portfolio/uae-supplier-1.jpg",
      description:
        "Corporate site focused on technical SEO, fast Core Web Vitals, and content structure for UAE market.",
      tags: ["Next.js", "Tailwind", "SEO", "Core Web Vitals"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "UAE Supplier Brand – Website #2",
      category: "Business Website (Next.js)",
      img: "/images/portfolio/uae-supplier-2.jpg",
      description:
        "Multi-page site with schema markup, optimized sitemap/robots, and blazing page speed.",
      tags: ["Next.js", "Tailwind", "SEO", "Schema"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Hotstar-style Movie Explorer",
      category: "React App",
      img: "/images/portfolio/hotstar-clone.jpg",
      description:
        "Movie search/browse experience with hover previews, watchlist, and responsive grid. Built in React.",
      tags: ["React", "TMDB API", "Hover Cards", "Responsive"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Web Design System & Site",
      category: "Design / React",
      img: "/images/portfolio/design-system.jpg",
      description:
        "A clean UI kit and marketing site built in React with thoughtful UX, spacing scale, and component library.",
      tags: ["React", "Design System", "UX", "Accessibility"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Business Site",
      category: "WordPress",
      img: "", // No image
      description: "Coming soon",
      tags: ["WordPress"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="works" className="py-20 bg-gray-950 text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-yellow-600 uppercase tracking-widest text-sm font-semibold">
          Recent Works
        </h2>
        <p className="text-3xl font-bold mt-2">A few projects I’m proud of</p>
        <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
          Full-stack builds, high-performance business websites, React apps, and WordPress implementations.
        </p>
      </div>

      {/* Horizontal works */}
      <div className="max-w-6xl mx-auto px-6 mt-12 flex flex-col gap-16">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Image or Skeleton */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
              {p.img ? (
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image coming soon</span>
                </div>
              )}
              <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium">
                {p.category}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-4">{p.description}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                >
                  View Project 
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm"
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
