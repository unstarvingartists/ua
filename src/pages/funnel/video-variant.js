import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/funnel/navigation";
import Seo from "../../components/seo";
import Wistia from "../../components/funnel/wistia";

export default function VideoVariant({ location }) {
  const [visible, setVisible] = useState(false);

  if (typeof window !== `undefined`) {
    window._wq = window._wq || [];
    window._wq.push({
      id: "kqdi3nyjmf",
      onReady: function (video) {
        video.bind("betweentimes", 564, 692, function (withinInterval) {
          if (withinInterval) {
            setVisible(true);
          } else {
            return video.unbind;
          }
        });
        console.log("I got a handle to the video!", video);
      },
    });
  }
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/kqdi3nyjmf.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);
  return (
    <>
      <Layout>
        <Seo title="A Short Film: Flywheels" pathname={location.pathname} />
        <div className="pt-6">
          <Navigation />
        </div>
        <div className="max-w-5xl mx-auto">
          <Wistia id="kqdi3nyjmf" />
        </div>
        {visible && (
          <div className="flex flex-col mt-10 space-y-2 text-2xl font-bold text-center text-blue-500">
            <a
              href="https://vouch.iljmp.com/2/ianhh"
              target="_parent"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Let Us Help You Do This
            </a>
            <a
              href="https://vouch.iljmp.com/2/ianhh"
              target="_parent"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              (Book A Free Strategy Session)
            </a>
          </div>
        )}
      </Layout>
    </>
  );
}
