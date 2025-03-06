const Map = () => {
  return (
    <section className="py-10 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-2xl font-bold text-[#DA7600] text-center mb-6">
          Find Us
        </h2>
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.99104884665!2d3.3224909736684927!3d6.648029993346613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914c3d5340eb%3A0x6c74ed41d7f0a1b9!2s5%20Bucknor%20Savage%20Blvd%2C%20Ojodu%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1741292235197!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Basketball4everyone Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
