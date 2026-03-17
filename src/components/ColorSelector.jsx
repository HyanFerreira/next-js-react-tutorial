"use client";

import { useState } from "react";

export default function ColorSelector() {
  const [color, setColor] = useState("bg-red-500");

  return (
    <div className="w-88 h-60 bg-gray-900 rounded-lg p-3 flex flex-col gap-4">
      <div className={`${color} w-full h-32 rounded-md`}></div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            setColor("bg-red-500");
          }}
          className="w-16 h-16 rounded-md cursor-pointer bg-red-500"
        ></button>
        <button
          type="button"
          onClick={() => {
            setColor("bg-green-500");
          }}
          className="w-16 h-16 rounded-md cursor-pointer bg-green-500"
        ></button>
        <button
          type="button"
          onClick={() => {
            setColor("bg-yellow-500");
          }}
          className="w-16 h-16 rounded-md cursor-pointer bg-yellow-500"
        ></button>
        <button
          type="button"
          onClick={() => {
            setColor("bg-blue-500");
          }}
          className="w-16 h-16 rounded-md cursor-pointer bg-blue-500"
        ></button>
      </div>
    </div>
  );
}
