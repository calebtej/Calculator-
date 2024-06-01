import React from "react";

interface ButtonProps {
  symbol: string;
  color?: string;
  handleClick: (symbol: string) => void;
}

const Button: React.FC<ButtonProps> = ({ symbol, color, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(symbol)}
      className={`flex justify-center items-center h-16 text-white text-2xl flex-1 m-1 rounded-full ${
        color ? color : "bg-gray-600"
      }`}
    >
      {symbol}
    </button>
  );
};

export default Button;
