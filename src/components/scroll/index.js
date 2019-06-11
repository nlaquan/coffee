import React from 'react';
import { string, element, oneOfType } from 'prop-types';
import './index.css';

function Link({ to, children, activeClass }) {
  const handleClick = () => {
    const target = document.getElementById(to);
    window.scrollTo({
      top: target.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      role="menuitem"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
      className={`scroll-item ${activeClass}`}
    >
      <span>
        {children}
      </span>
    </div>
  );
}

Link.defaultProps = {
  activeClass: '',
};

Link.propTypes = {
  to: string.isRequired,
  activeClass: string,
  children: oneOfType([element, string]).isRequired,
};

export default Link;
