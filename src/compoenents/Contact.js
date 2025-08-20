function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <div className="text-center flex flex-col gap-6 mb-16">
        <div className="flex justify-center">
          <h2
            className="text-4xl font-bold pl-4 inline-flex items-center"
            style={{ color: "#D9C99A", borderLeft: "4px solid #3A592C" }}
          >
            Get In Touch
          </h2>
        </div>

        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed tracking-widest"
          style={{ color: "#D3D9A7" }}
        >
          I’d love to hear from you. Whether you have a question or just want to
          chat about design, tech & art — drop me a message.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <a
          href="mailto:mhdfarhanfarhann5@gmail.com"
          className="px-10 py-4 font-semibold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          style={{
            backgroundColor: "#D3D9A7",
            color: "#415936",
          }}
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

export default Contact;
