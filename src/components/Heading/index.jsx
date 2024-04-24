import React from "react";

const sizes = {
  s: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  md: "text-[51px] font-bold md:text-[43px] sm:text-[37px]",
  xs: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_19 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
