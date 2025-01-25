import React from "react";

const sizes = {
  s: "text-[15px] font-semibold",
  md: "text-base font-bold",
  xs: "text-sm font-semibold",
  lg: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
