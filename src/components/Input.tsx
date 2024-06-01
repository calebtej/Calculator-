import React from "react";

interface InputProps {
  text: string;
  result: string;
}

const Input: React.FC<InputProps> = ({ text, result }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={text}
        readOnly
      />
      <div className="text-right text-gray-600 mt-2 h-6">{result}</div>
    </div>
  );
};

export default Input;
