"use client";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    "C",
    "(",
    ")",
    "%",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div>
      <div className="float-right mt-4 mr-8">
            <UserButton afterSignOutUrl="/"/>
            </div>
    <main className="flex  flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none text-black"
          value={expression}
          readOnly
          placeholder="Enter Expression"
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus:outline-none text-black"
          value={result}
          readOnly
          placeholder="Result"
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-black hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
          </div>
  );
}
