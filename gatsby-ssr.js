const React = require("react");

const hyros = `
var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://t.unstarvingartists.com/v1/lst/universal-script?ph=bfd3db6e8e057d8d45cf4786e7ffe74d27cd429473a11dda6c6b7d7c0eb41f52&tag=!tracking&spa=true";
head.appendChild(script);
`;

const gecEmail = `
window.gecEmail = localStorage.getItem('optin:email');
`;

let HeadComponents = [
  <script key="gecEmail" dangerouslySetInnerHTML={{ __html: gecEmail }} />,
  <link
    key="inter"
    rel="preload"
    as="style"
    onLoad="this.onload=null;this.rel='stylesheet'"
    href="https://rsms.me/inter/inter.css"
  />,
  <noscript key="inter-noscript">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </noscript>,
  <script key="hyros" dangerouslySetInnerHTML={{ __html: hyros }} />,
  <meta
    key="fb-verification"
    name="facebook-domain-verification"
    content="2uzjd13yhe3pfmwjqb58uypacajmxb"
  />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};
