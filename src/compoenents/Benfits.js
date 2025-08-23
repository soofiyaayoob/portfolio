import Image from "next/image";

function Benefits() {
  const benefits = [
    {
      img: "/seo.svg",
      title: "Search Engine Optimization",
      subtitle: "Optimized for all platforms and search engines",
    },
    {
      img: "/rocket.svg",
      title: "Fast Performance",
      subtitle: "Quick load times and smooth interactions",
    },
    {
      img: "/latest.svg",
      title: "Modern Technology",
      subtitle: "Leveraging latest tools and frameworks",
    },
    {
      img: "/res.svg",
      title: "Responsive Design",
      subtitle: "Looks great on any device",
    },
  ];

  return (
<section data-section="whyme"
  className="w-full py-16 px-6"
  style={{ backgroundColor: "#D9C99A" ,color: "#415936"  }}
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4" >
      Why Me
    </h2>
    <p className="mb-8 max-w-xl mx-auto" style={{ color: "#48643C" }}>
      Here are some key benefits of working with us. We focus on quality, efficiency, and delivering top-notch solutions for your business.
    </p>

    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {benefits.map((b, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg text-center p-6"
        
        >
          <Image
            src={b.img}
            alt={b.title}
            width={150}
            height={150}
            className="mx-auto mb-4"
            priority
          />
          <h3 className="text-xl font-semibold mb-2" >
            {b.title}
          </h3>
          <p className="text-sm" >
            {b.subtitle}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}

export default Benefits;
