import React from "react";

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
}> & React.HTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href,
  as = "button",
  type = "button",
  onClick,
  ...rest
}) => {
  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
