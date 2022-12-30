import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo noIndex title="EW Embed Test" pathname={location.pathname} />
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className="wj-embed-button"
          data-webinarhash="vq0ggc7"
          style={{
            border: "2px solid rgba(0, 0, 0, 0.5)",
            background: "rgba(41, 182, 246, 0.95)",
            color: "rgb(255, 255, 255)",
            fontSize: "24px",
            padding: "18px 80px",
            boxShadow: "none",
            borderRadius: "4px",
            whiteSpace: "normal",
            fontWeight: "700",
            lineHeight: "1.3",
            cursor: "pointer",
            fontFamily:
              'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            wordBreak: "break-word",
            margin: "auto",
          }}
        >
          👉 Access FREE TRAINING Now!
        </button>
        <script src="https://event.webinarjam.com/register/vq0ggc7/embed-button?formTemplate=2&formColor=1"></script>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className="wj-embed-button"
          data-webinarhash="vq0ggc7"
          style={{
            border: "2px solid rgba(0, 0, 0, 0.5)",
            background: "rgba(41, 182, 246, 0.95)",
            color: "rgb(255, 255, 255)",
            fontSize: "24px",
            padding: "18px 80px",
            boxShadow: "none",
            borderRadius: "4px",
            whiteSpace: "normal",
            fontWeight: "700",
            lineHeight: "1.3",
            cursor: "pointer",
            fontFamily:
              'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            wordBreak: "break-word",
            margin: "auto",
          }}
        >
          👉 Access FREE TRAINING Now!
        </button>
        <script src="https://event.webinarjam.com/register/vq0ggc7/embed-button?formTemplate=2&formColor=1"></script>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className="wj-embed-button"
          data-webinarhash="vq0ggc7"
          style={{
            border: "2px solid rgba(0, 0, 0, 0.5)",
            background: "rgba(41, 182, 246, 0.95)",
            color: "rgb(255, 255, 255)",
            fontSize: "24px",
            padding: "18px 80px",
            boxShadow: "none",
            borderRadius: "4px",
            whiteSpace: "normal",
            fontWeight: "700",
            lineHeight: "1.3",
            cursor: "pointer",
            fontFamily:
              'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            wordBreak: "break-word",
            margin: "auto",
          }}
        >
          👉 Access FREE TRAINING Now!
        </button>
        <script src="https://event.webinarjam.com/register/vq0ggc7/embed-button?formTemplate=2&formColor=1"></script>
      </div>
    </Layout>
  );
}
