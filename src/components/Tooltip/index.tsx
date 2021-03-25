import React from 'react';

interface TooltipProps {
  message: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ message, className, children }) => {
  return (
    <div className={className}>
      {children}
      <span>{message}</span>
    </div>
  );
}

export default Tooltip;