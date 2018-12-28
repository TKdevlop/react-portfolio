import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TKdevlop" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/T__K/" style={ { color: colorPrimary } }><i className="fab fa-codepen"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TK_Devlop" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
       
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tushar-kharbanda-69841a14b/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;