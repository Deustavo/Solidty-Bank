import React from 'react';

interface TooltipProps {
  message: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ message, className, children }) => {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
      {children}
      <p style={{ marginLeft: 4, fontSize: 14 }}>{message}</p>
    </div>
  );
}

export default Tooltip;