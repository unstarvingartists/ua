const React = require("react");

const hyros = `
var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://t.unstarvingartists.com/v1/lst/universal-script?ph=bfd3db6e8e057d8d45cf4786e7ffe74d27cd429473a11dda6c6b7d7c0eb41f52&tag=!tracking";
head.appendChild(script);
`;

const HeadComponents = [
  <link key="inter" rel="stylesheet" href="https://rsms.me/inter/inter.css" />,
  <script key="hyros" dangerouslySetInnerHTML={{ __html: hyros }} />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};
