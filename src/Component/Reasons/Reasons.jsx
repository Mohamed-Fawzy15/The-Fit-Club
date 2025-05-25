import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import style from "./Reasons.module.css";

export default function Reasons() {
  return (
    <section id="whyUs" className="py-12">
      <div className="container">
        <div className="row justify-center">
          <div className={style.imgContainer}>
            <img src={img1} alt="Image 1" className="object-cover" />

            <img src={img2} alt="Image 2" className="object-cover" />

            <img src={img3} alt="Image 3" className="object-cover" />

            <img src={img4} alt="Image 4" className="object-cover" />
          </div>

          <div className="w-full md:w-1/2">
            <p className="uppercase text-orange-400 font-semibold text-xl">
              some reasons
            </p>
            <h2 className="text-6xl flex font-bold text-white">
              <span className="Storke-word">Why</span> choose us?
            </h2>

            <ul className="text-white px-4">
              <li className="flex items-center gap-2 py-4 ">
                <img src={tick} alt="List Mark" className="w-8" />
                <p className="text-lg uppercase font-semibold">
                  over 140+ expert coachs
                </p>
              </li>
              <li className="flex items-center gap-2 py-4">
                <img src={tick} alt="List Mark" className="w-8" />
                <p className="text-lg uppercase font-semibold">
                  train smarter and faster than before
                </p>
              </li>
              <li className="flex items-center gap-2 py-4">
                <img src={tick} alt="List Mark" className="w-8" />
                <p className="text-lg uppercase font-semibold">
                  1 free program for new member
                </p>
              </li>
              <li className="flex items-center gap-2 py-4">
                <img src={tick} alt="List Mark" className="w-8" />
                <p className="text-lg uppercase font-semibold">
                  reliable partners
                </p>
              </li>
            </ul>

            <div className="flex justify-center flex-col text-center">
              <p className="text-[var(--gray)] text-lg font-semibold py-2">
                OUR PARTNERS
              </p>
              <div className="flex justify-center gap-4">
                <img src={nb} alt="New Balance Logo" />
                <img src={adidas} alt="Adidas Logo" />
                <img src={nike} alt="Nike Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
