import { type ReactNode } from "react";

export type Button = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className = "" }: Button) => {
  const btnClassName = `${
    className ? className : ""
  } py-[20px] px-[50px] bg-white shadow-normal dark:bg-dark-bg-one dark:text-dark-white dark:shadow-dark-normal fm:px-[24px] fm:py-[8px]`;

  return (
    <button className={btnClassName} type="button">
      {children}
    </button>
  );
};

export default Button;
