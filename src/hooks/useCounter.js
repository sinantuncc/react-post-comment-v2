import { useState } from "react";

export const useCounter = (INITIAL_STATE = 0) => {
  const [count, setCount] = useState(INITIAL_STATE);

  const updateCounter = () => setCount(count + 1);

  return [count, updateCounter];
};
