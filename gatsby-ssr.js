const React = require("react");

const hyros = `
var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://176563.tracking.hyros.com/v1/lst/universal-script?ph=bfd3db6e8e057d8d45cf4786e7ffe74d27cd429473a11dda6c6b7d7c0eb41f52&tag=!tracking";
head.appendChild(script);
`;

const fb = `
window.fbAsyncInit = function() {
  FB.init({
    appId            : '561176641540069',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v11.0'
  });
};
`;

const HeadComponents = [
  <script key="hyros" dangerouslySetInnerHTML={{ __html: hyros }} />,
];

const PreBodyComponents = [
  <script key="fb" dangerouslySetInnerHTML={{ __html: fb }} />,
  <script
    key="fb2"
    async={true}
    defer={true}
    crossOrigin="anonymous"
    src="https://connect.facebook.net/en_US/sdk.js"
  />,
];

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(HeadComponents);
  setPreBodyComponents(PreBodyComponents);
};
