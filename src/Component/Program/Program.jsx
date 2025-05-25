import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
import style from "./Program.module.css";

export default function Program() {
  return (
    <section id="programs" className="section-spacing">
      <div className="container">
        <header>
          <h2 className="text-white flex flex-col md:flex-row text-center md:text-start font-bold gap-20 text-5xl justify-center uppercase">
            <span className="Storke-word">eExplore our</span>
            <span className="">Programs</span>
            <span className="Storke-word">To shape you</span>
          </h2>
        </header>
        <div className="row gap-4 my-10 justify-center">
          {programsData.map((program, i) => (
            <div key={i} className={`bg-[gray] ${style.card}`}>
              <div
                className={`p-8 flex gap-4 text-white flex-col justify-between ${style.cardInner}`}
              >
                {program.image}

                <h3 className="font-bold text-lg">{program.heading}</h3>
                <p className="w-72">{program.details}</p>
                <button className="flex items-center gap-3">
                  Join Now{" "}
                  <img
                    src={rightArrow}
                    className="w-[1rem]"
                    alt="Right Arrow"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
