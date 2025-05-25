import gitHubImg from "../../assets/github.png";
import linkedInImg from "../../assets/linkedin.png";
import insatgramImg from "../../assets/instagram.png";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="blur w-[22rem] h-[30rem] left-0 bottom-0"></div>
      <div className="blur w-[22rem] h-[30rem] right-0 bottom-0"></div>
      <div className="container">
        <div className="row flex-col items-center">
          <hr className="w-full h-[5px] text-[var(--lightGray)] my-10" />

          <ul className="flex gap-8 section-spacing">
            <li>
              <img
                src={gitHubImg}
                alt="GitHub logo"
                className="w-[2rem] cursor-pointer"
              />
            </li>
            <li>
              <img
                src={linkedInImg}
                alt="LinkedIn logo"
                className="w-[2rem] cursor-pointer"
              />
            </li>
            <li>
              <img
                src={insatgramImg}
                alt="Insatgram logo"
                className="w-[2rem] cursor-pointer"
              />
            </li>
          </ul>

          <img src={logo} alt="The Fit Club Logo" className="w-40 pb-8" />
        </div>
      </div>
    </footer>
  );
}
