import { useEffect, useState } from 'react';
import MyButton from "./MyButton";

// Lifting state up
// Prop Drilling

function ButtonParent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('hi', Math.random());
  }, [])

  return (
    <>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

export default ButtonParent;
