import { useForm } from "react-hook-form";
import style from "./Join.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Join() {
  const schema = z.object({
    email: z.string().email("invalid_email"),
  });

  const { register, handleSubmit } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("fJJVvH8V_q7cv2lzU"); // Replace with your EmailJS public key
  }, []);

  const handleJoinEmail = async (values) => {
    try {
      const emailParams = {
        email: values.email, // Match this with your EmailJS template variable
      };

      const result = await emailjs.send(
        "service_evusvtk", // Replace with your EmailJS service ID
        "template_pzedgcj", // Replace with your EmailJS template ID
        emailParams
      );

      console.log("Email sent successfully!", result);
      toast.success(
        "Thank you for joining! Check your email for confirmation.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="joinUs">
      <div className="container">
        <div className="row items-center">
          <div
            className={`text-white font-bold uppercase relative w-full md:w-1/2 ${style.joinLeftSide}`}
          >
            <hr />
            <h2 className="text-5xl flex flex-col md:flex-row gap-4 my-4">
              <span className="Storke-word ">Ready to</span>
              <span>Level up</span>
            </h2>
            <h2 className="text-5xl flex flex-col md:flex-row  gap-4 my-4">
              <span>your body</span>
              <span className="Storke-word">with us?</span>
            </h2>
          </div>
          <div className="flex justify-center items-end">
            <form
              onSubmit={handleSubmit(handleJoinEmail)}
              className={style.joinForm}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              />
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
