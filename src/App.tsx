import React, { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const addToText = (val: string): void => {
    setText((prevText) => prevText + val);
  };

  const calculateResult = (): void => {
    try {
      setResult(math.evaluate(text).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const resetInput = (): void => {
    setText("");
    setResult("");
  };

  const buttonColor = "bg-yellow-500"; // Tailwind color class

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <Input text={text} result={result} />
        <div className="grid grid-cols-4 gap-1">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex space-x-1 mt-2">
          <Button symbol="Clear" color="bg-red-500" handleClick={resetInput} />
        </div>
      </div>
    </div>
  );
};

export default App;
