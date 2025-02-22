import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`border border-gray-200 shadow-md rounded-lg p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
