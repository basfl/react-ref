import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("****", refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current.value);
    refContainer.current.focus();
    return () => {
      console.log("cleaning");
    };
  });
  console.log(refContainer);
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
