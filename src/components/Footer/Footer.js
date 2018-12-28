import React from "react";
import PropTypes from "prop-types";

import "./style";

const Footer = (props, context) => {
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          Made by{" "}
          <a
            href="https://github.com/tkdevlop"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colorPrimary }}
          >
            Tushar
          </a>{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
