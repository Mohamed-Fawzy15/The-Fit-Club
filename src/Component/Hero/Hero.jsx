import heroImg from "../../assets/hero_image.png";
import heroImgBack from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import { motion } from "motion/react";

export default function Hero() {
  const transition = { type: "spring", duration: 3 };
  return (
    <section id="Hero" className="">
      <div className="container min-h-[90vh]">
        <div className="blur w-[22rem] h-[30rem] left-0"></div>

        <div className="row flex-col md:flex-row justify-between md:items-center relative">
          <div className="flex flex-col gap-3 w-full items-center text-center md:text-left md:items-start md:w-2/3">
            <div className="bg-[#363d42] rounded-[4rem] w-fit py-5 px-3 my-10 text-white relative flex items-center justify-start">
              <motion.div
                initial={{ left: "180px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition }}
                className="absolute bg-[var(--orange)] w-[5.4rem] h-[80%] left-2 rounded-[3rem] z-10"
              ></motion.div>
              <span className="z-20">The Best Fitness Club in The Town</span>
            </div>

            <div className="my-5">
              <div className="flex flex-col gap-2 uppercase text-7xl font-semibold text-white">
                <h1>
                  <span className="Storke-word">Shape</span> Your
                </h1>
                <h2>Ideal Body</h2>
              </div>

              <p className="text-lg font-extralight w-4/5 text-white ">
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </p>
            </div>

            <ul className="flex gap-4">
              <li>
                <p className="text-white text-4xl">+ 140</p>
                <p className="text-[var(--gray)] uppercase">expert coaches</p>
              </li>
              <li>
                <p className="text-white text-4xl">+ 978</p>
                <p className="text-[var(--gray)] uppercase">Members joined</p>
              </li>
              <li>
                <p className="text-white text-4xl">+ 50</p>
                <p className="text-[var(--gray)] uppercase">fitness programs</p>
              </li>
            </ul>

            <div className="flex gap-5">
              <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Get Started
              </button>
              <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Learn More
              </button>
            </div>
          </div>

          <div className="md:bg-[var(--orange)] w-1/3 h-[80vh] flex flex-wrap md:block relative">
            {/* heart rate */}
            <motion.div
              initial={{ right: "-1rem" }}
              whileInView={{ right: "4rem" }}
              transition={transition}
              className="flex flex-col justify-center gap-4 bg-[var(--darkGray)] w-32 md:w-fit p-4 items-start rounded-[5px] z-50  md:absolute top-8 md:right-16 md:top-28 "
            >
              <img src={heart} alt="Heart Icon" className="w-8" />
              <span className="text-[var(--gray)]">Heart Rate </span>
              <span className="text-white text-2xl">116 bpm</span>
            </motion.div>

            {/* hero image */}
            <img
              src={heroImg}
              alt="Hero Image"
              className="relative w-40 left-40 -top-8 md:absolute md:top-40 md:right-32 md:w-96 z-20"
            />
            <motion.img
              initial={{ right: "11rem" }}
              whileInView={{ right: "20rem" }}
              transition={transition}
              src={heroImgBack}
              alt="the background of the hero image"
              className="absolute top-16 right-80 z-10 w-[15rem]"
            />

            {/* calories */}
            <motion.div
              initial={{ right: "37rem" }}
              whileInView={{ right: "28rem" }}
              transition={transition}
              className="flex gap-8 bg-[var(--caloryCard)] rounded-[5px] w-3xs p-4 relative left-0 md:absolute md:top-[32rem] md:right-[0rem]"
            >
              <img src={calories} alt="Calory Image" className="w-12" />
              <div className="flex justify-between flex-col">
                <span className="text-[var(--gray)]">Calories burned</span>
                <span className="text-white text-2xl">220 kcal</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
