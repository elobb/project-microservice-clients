import React from "react";

const WidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-11/12 lg:max-w-[1200px] mx-auto">{children}</div>;
};

export default WidthWrapper;
