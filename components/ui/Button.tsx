import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105";

  const styles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-lg hover:shadow-purple-500/40",

    secondary:
      "border border-purple-300 text-purple-700 bg-white hover:bg-purple-50",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`}>
      {children}
    </button>
  );
}