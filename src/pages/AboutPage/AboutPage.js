import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I love <span className="highlight">JavaScript</span> and
              building web.
            </p>
            <p>
              When my dev senses kick-in I build{" "}
              <span className="highlight"> awesome stuff</span>. I stay close to
              the open-source community and try to keep tabs with the pace at
              which the web is evolving. I also like to{" "}
              <span className="highlight">play and build games</span>.
            </p>
            <p>
              I love to work with React-Redux, JavaScript, React-Native, Node,
              Laravel, PHP, SCSS and Vue(Remote preferred).
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
