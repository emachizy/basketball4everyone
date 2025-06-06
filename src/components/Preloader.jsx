const Preloader = () => {
  return (
    <div className="preload-container fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loading-text flex flex-wrap justify-center text-center">
        {[
          "B",
          "A",
          "S",
          "K",
          "E",
          "T",
          " ",
          "B",
          "A",
          "L",
          "L",
          " ",
          "4",
          " ",
          "E",
          "V",
          "E",
          "R",
          "Y",
          "O",
          "N",
          "E",
          ".",
        ].map((letter, index) => (
          <span
            key={index}
            className="text-4xl font-bold mx-1 animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
