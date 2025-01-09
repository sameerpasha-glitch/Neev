import React, { useEffect } from "react";
import "../App.css";
import "./Hr.css";

export const Hero = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    // Adding connection lines dynamically
    const line1 = document.createElement("div");
    line1.className = "connection-line";
    line1.style.transform = "translate(-50%, -2px)";

    const line2 = document.createElement("div");
    line2.className = "connection-line";
    line2.style.transform = "translate(50%, -2px)";

    const aiConnector = container.querySelector(".ai-connector");
    if (aiConnector) {
      aiConnector.appendChild(line1);
      aiConnector.appendChild(line2);
    }

    // Scroll-to-top button behavior
    const backButton = document.querySelector("#back");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backButton.style.display = "block";
      } else {
        backButton.style.display = "none";
      }
    });

    // Cleanup event listeners and DOM changes
    return () => {
      if (aiConnector) {
        aiConnector.removeChild(line1);
        aiConnector.removeChild(line2);
      }
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero flex justify-between mt-8">
        <div className="patient ml-20 mt-8">
          <img
            src="../src/assets/undraw_family_6gj8.svg"
            alt="Patient"
            width={"200px"}
          />
        </div>
        <div className="ai mt-20">
          <h2 className="text-slate-500 text-5xl w-[900px] text-center">
            Facilitating Accurate{" "}
            <span className="text-stone-900">Connections</span> Between{" "}
            <span className="text-indigo-500">Patients</span> and{" "}
            <span className="text-rose-500">Healthcare</span> Providers
          </h2>
          <p className="text-center mt-8 text-xl text-green-500 font-semibold shadow-md">
            "Streamlining healthcare to prioritize patients by minimizing
            administrative tasks and saving time."
          </p>
          <div className="container relative">
            <div className="person customer z-50">
              <img
                src="../src/assets/pngtree-cute-cartoon-patient-figure-character-design-image_1107951.jpg"
                alt="Customer"
              />
              <p className="border border-black"></p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/4 top-1/2 transform -translate-y-1/2"
              viewBox="0 0 200 100"
              fill="none"
              stroke="blue"
              strokeWidth="2"
            >
              <path d="M0,50 Q50,0 100,50 T200,50" />
            </svg>
            <div className="">
              <div className="ai-circle">
                <img src=".\src\assets\neev (1).svg" alt="AI" />
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-1/4 top-1/2 transform -translate-y-1/2"
              viewBox="0 0 200 100"
              fill="none"
              stroke="red"
              strokeWidth="2"
            >
              <path d="M0,50 Q50,100 100,50 T200,50" />
            </svg>
            <div className="person doctor">
              <img
                src="../src/assets/de210368-9622-4654-b8c7-a7f24673cb00.avif"
                alt="Doctor"
              />
              <p className="border border-red-500"></p>
            </div>
          </div>
        </div>
        <div className="docter mr-20 mt-20">
          <img
            src="../src/assets/undraw_doctor_aum1.svg"
            alt="Doctor"
            width={"200px"}
          />
        </div>
      </section>
      <button
        id="back"
        onClick={scrollToTop}
      >
        <svg
          id="svgIcon"
          viewBox="0 0 384 512"
          fill="currentColor"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </>
  );
};

export default Hero;
