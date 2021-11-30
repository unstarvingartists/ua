import React, { useEffect } from "react";

export default function Wistia({ id, hidePlaybar }) {
  useEffect((id) => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `https://fast.wistia.com/embed/medias/${id}.jsonp`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);
  return (
    <div
      className="relative mx-auto my-5 wistia_responsive_padding max-w-7xl"
      style={{ paddingTop: "56.25%" }}
    >
      <div className="absolute top-0 left-0 w-full h-full wistia_responsive_wrapper">
        <div
          className={`wistia_embed h-full relative w-full wistia_async_${id} videoFoam=true wistia_embed_initialized ${
            hidePlaybar && "playbar=false"
          }`}
          id={`wistia-${id}-1`}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity opacity-100 wistia_swatch">
            <img
              src={`https://fast.wistia.com/embed/medias/${id}/swatch`}
              alt=""
              aria-hidden="true"
              className="object-contain w-full h-full blur-sm"
            />
          </div>
          <div
            className="box-content relative inline-block w-full h-full p-0 m-0 overflow-hidden leading-normal align-top outline-none"
            id="wistia_chrome_23"
            tabIndex="-1"
          ></div>
        </div>
      </div>
    </div>
  );
}
