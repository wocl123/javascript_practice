import { useState, useEffect } from "react";

/*
리액트를 사용하는 이유! => 최소 단위의 렌더링을 위해 사용한다.
useState() : [변수, 변수를 제어하는 함수]로 구성되며, 변하는 값을 제어, 해당 부분의 리렌더링
props : 태그의 속성 값을 함수의 argument 처럼 컴포넌트에 값을 전달
useEffect() : 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재
디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다.
이 때, 디펜던시는 여러 개 입력이 가능하다.
*/

/*
useEffect = 두 개의 argument를 가지는 함수로 해당 컴포넌트의 렌더링이 완료된 후에 실행됨.
첫 번째 인자는 딱 한번만 실행하고 싶은 코드, 두 번째는 배열[]
ex) useEffect(callback, []);

특정한 코드만 변화했을 때 원하는 코드를 실행하는 방법
useEffect(()=> {console.log("~~~"), keyword}, [keyword]);
위의 코드는 keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것!!!
만약 배열이 비었다면 한번만 실행되지만, 무엇이 변화하는지에 따라 실행하려면 배열안에 채워주면 됨!
2개도 가능하답니다!
*/
function Effects() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    // keyword가 공백이 아니거나 길이가 5 이상일 때만 실행!
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("BUTTON CLICK", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I RUN ONLY ONCE");
  }, []);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Effects;
