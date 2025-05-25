import { plansData } from "../../data/plansData";
import rightArrow from "../../assets/rightArrow.png";
import whiteTick from "../../assets/whiteTick.png";
import style from "./Plans.module.css";

export default function Plans() {
  return (
    <section id="plans" className="py-12">
      <div className="container">
        <div className="blur w-[22rem] h-[30rem] left-0"></div>
        <div className="blur w-[22rem] h-[30rem] right-0"></div>

        <header>
          <h2 className="text-white flex flex-col md:flex-row font-bold gap-20 text-5xl justify-center uppercase">
            <span className="Storke-word">Ready to Start</span>
            <span className="">Your Journey</span>
            <span className="Storke-word">now with us</span>
          </h2>
        </header>

        <div className={`row gap-12 justify-center my-10 ${style.plansHolder}`}>
          {plansData.map((plan, i) => (
            <div
              key={i}
              className={`bg-[var(--caloryCard)] ${style.plansCard}`}
            >
              <div
                className={`p-8 flex gap-4 text-white flex-col justify-between ${style.cardInner}`}
              >
                {plan.icon}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-5xl font-semibold">$ {plan.price}</p>
                <ul>
                  {plan.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 py-4">
                      <img src={whiteTick} alt="Tick Icon" className="w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="flex gap-2 items-center">
                  <span>See more benefits </span>
                  <img
                    src={rightArrow}
                    alt="Right Arrow Icon"
                    className="w-4"
                  />
                </a>

                <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56" />
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      />
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="object-cover w-full h-full"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
                  <span className="relative text-base font-semibold">
                    Join Now
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
