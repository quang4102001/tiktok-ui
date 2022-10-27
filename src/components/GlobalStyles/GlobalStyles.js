import PropTypes from 'prop-types';

import './style.scss';

function GlobalStyle({ children }) {
  return children;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
