import { useState } from "react";

export default function Dynamic() {
  const [on, setOn] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-900"
      onClick={() => setOn(!on)}
    >
      <div className="flex justify-center items-center w-80 h-80 bg-white">
        <div
          className={`w-20 h-20 rounded-full ${
            on ? "bg-green-500" : "bg-red-600"
          }`}
        ></div>
      </div>
    </div>
  );
}
