import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Popup from "./popup";

const CheckIcon = () => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="check-circle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="flex-shrink-0 w-4 h-4 text-green-500 md:w-5 md:h-5"
    >
      <path
        fill="currentColor"
        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
      />
    </svg>
  );
};

export default function Video() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseleave", function eventBeforeExit(e) {
      setOpen(true);
      document.removeEventListener("mouseleave", eventBeforeExit);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-[70vh] px-4 pb-10 mx-auto space-y-5 md:flex-row md:space-y-0 md:space-x-14 max-w-6xl sm:px-6">
        <div className="flex justify-center md:justify-start md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex flex-col items-center justify-center w-auto py-6 space-y-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md px-7 hover:bg-blue-700"
          >
            <span className="text-xl md:text-3xl">
              Get Free Training + Checklist
            </span>
            <span className="font-light opacity-75 md:text-xl">
              3,000+ Views and Counting{" "}
            </span>
          </button>
        </div>
        <button
          className="w-full md:w-1/2 h-[fit-content] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <StaticImage
            className="w-full h-full"
            src="../../images/video.png"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
        </button>
        <div className="space-y-3 text-base md:w-1/2">
          <p>In this training you will learn</p>
          <ul className="space-y-3">
            <li className="flex space-x-3">
              <CheckIcon />
              <p className="font-bold">
                How we sell art online with zero technical skills, gallery
                connections, or art world fame!
              </p>
            </li>
            <li className="flex space-x-3">
              <CheckIcon />
              <p>
                How we make money from selling our artwork to collectors
                worldwide and with no upfront investment
              </p>
            </li>
            <li className="flex space-x-3">
              <CheckIcon />
              <p>
                ​*A simple 3 step artist launching process we use to get
                collectors buying our works of art quickly
              </p>
            </li>
          </ul>
          <div className="hidden md:flex justify-center md:justify-start">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex flex-col items-center justify-center w-auto py-6 space-y-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md px-7 hover:bg-blue-700"
            >
              <span className="text-xl md:text-3xl">
                Get Free Training + Checklist
              </span>
              <span className="font-light opacity-75 md:text-xl">
                3,000+ Views and Counting{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} />
    </>
  );
}
