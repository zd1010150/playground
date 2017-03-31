import React, { PureComponent, PropTypes } from 'react';

const propTypes = {
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

class Pixel extends PureComponent {
  render() {
    const { i, j, active, onToggle } = this.props;
    return (<div
      className="Pixel"
      style={{ top: i * 3, left: j * 3 }}
      onMouseOver={onToggle}
      data-active={active ? '1' : '0'}
    />);
  }
}
Pixel.propTypes = propTypes;

export default Pixel;
