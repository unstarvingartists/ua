const React = require("react");

const hyros = `
var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://t.unstarvingartists.com/v1/lst/universal-script?ph=bfd3db6e8e057d8d45cf4786e7ffe74d27cd429473a11dda6c6b7d7c0eb41f52&tag=!tracking&spa=true";
head.appendChild(script);
`;

let HeadComponents = [
  <link key="inter" rel="stylesheet" href="https://rsms.me/inter/inter.css" />,
  <script key="hyros" dangerouslySetInnerHTML={{ __html: hyros }} />,
];

const sharethis = [
  <script
    key="sharethis"
    type="text/javascript"
    src="https://platform-api.sharethis.com/js/sharethis.js#property=60ecf2af67414f0019fb74a5&product=inline-share-buttons"
    async="async"
  />,
];

const sharethisPaths = ["/reviews/", "/blog/"];

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  if (sharethisPaths.some((path) => pathname.includes(path))) {
    setHeadComponents(HeadComponents.concat(sharethis));
  } else {
    setHeadComponents(HeadComponents);
  }
};
