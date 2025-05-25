import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import style from "./Testimonials.module.css";
import { motion } from "motion/react";

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <section id="testimonials" className="section-spacing">
      <div className="container">
        <div className="row flex-col md:flex-row">
          <div className="flex gap-8 flex-col text-white w-full md:w-1/2">
            <p className="text-[var(--orange)] uppercase text-2xl font-semibold">
              Testimonials
            </p>
            <h2 className="flex flex-col gap-4 text-5xl uppercase font-bold">
              <span className="Storke-word">What they</span>
              <span>say about us</span>
            </h2>

            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            >
              {testimonialsData[selected].review}
            </motion.div>
            <div className="font-semibold">
              <span className="text-[var(--orange)]">
                {testimonialsData[selected].name}
              </span>
              <span> - {testimonialsData[selected].status}</span>
            </div>
          </div>

          <div className={style.testimonialsRight}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
            ></motion.div>
            <motion.img
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
              src={testimonialsData[selected].image}
              alt={`${testimonialsData[selected].name} Image`}
              className={style.coachImg}
            />

            <div className="flex absolute gap-4 -bottom-16 md:bottom-4 left-12">
              <img
                src={leftArrow}
                alt="Left Arrow Icon"
                className="w-6 cursor-pointer"
                onClick={() => {
                  selected === 0
                    ? setSelected(testimonialsLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
              />
              <img
                src={rightArrow}
                alt="Right Arrow Icon"
                className="w-6 cursor-pointer"
                onClick={() => {
                  selected === testimonialsLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
