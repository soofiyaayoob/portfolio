function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      {/* Heading */}
      <div className="text-center flex flex-col gap-6 mb-16">
        <div className="flex justify-center">
  <h2 className="text-4xl font-bold border-l-4 border-yellow-500 pl-4 inline-flex items-center">
    Get In Touch
  </h2>
</div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-widest ">
          I’d love to hear from you. Whether you have a question or just want to
          chat about design, tech & art — drop me a message.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Say Hello Button */}
        <a
          href="mailto:mhdfarhanfarhann5@gmail.com"
          className="px-10 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

export default Contact;
