"use client";
import { useState } from "react";
import { counterTrigger } from "@/helpers/action";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <hr />
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          counterTrigger();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Counter;
