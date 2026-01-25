import { Fade } from "react-awesome-reveal";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LifestyleMatch = () => {
  const [text] = useTypewriter({
    words: [
      "Not just a roommate.",
      "Find someone who matches your lifestyle.",
      "Comfort creates better living.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* left */}
        <Fade direction="left" triggerOnce>
          <div>
            <h2 className="text-4xl font-semibold text-[#2a2418] leading-snug">
              {text}
              <Cursor cursorColor="#8a7747" />
            </h2>

            <p className="mt-6 text-[#6b5f3d] max-w-md">
              A great roommate isn’t just about sharing rent —
              it’s about shared habits, comfort, and mutual respect.
            </p>
          </div>
        </Fade>

        {/* right */}
        <Fade direction="right" triggerOnce>
          <div className="grid grid-cols-2 gap-6">

            {[
              "🐶 Pet Friendly",
              "🚭 Non Smoker",
              "🌙 Night Owl",
              "🌱 Clean Living",
              "🎧 Music Lover",
              "🧘 Calm Lifestyle",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  border border-[#e3d8c2]
                  rounded-xl
                  px-6 py-5
                  text-[#2a2418]
                  bg-[#faf8f3]
                  hover:bg-white
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-400
                  font-medium
                "
              >
                {item}
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default LifestyleMatch;
