import { useState, useEffect } from "react";

/*
Cleanup : 새로 렌더링한 이후 실행된다.
이 때 렌더링은 값이 변하여 새로운 것을 그려주거나, 컴포넌트를 없애는 경우가 있다.
useEffect는 리렌더링 이후 클린업을 마치고 실행된다!

*/

function Hello() {
  //   function destroyedFn() {
  //     console.log("Destroyed :(");
  //   }
  //   function createdFn() {
  //     console.log("Created :)");
  //     return destroyedFn;
  //   }
  /*첫 번째 방법
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
*/
  /*두 번째 방법*/
  useEffect(function () {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Cleanup;
