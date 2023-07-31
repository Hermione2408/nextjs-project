import React from 'react';
import styles from './tooltip.module.css';

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={styles.tooltip}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
