import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MovieApp;

/* 
api를 불러올 때 .then을 사용하기도 하지만, 보편적으로 사용하는 async-await를 사용한다.
1) then을 사용했을 때 문법
 fetch("api 주소").then((response)=>response.json()).then((json) => {})

2-1) async-await를 사용했을 때 문법
const 함수명 = async () => {
    const response = await fetch(
        `api 주소`
    );
    const json = await response.json();
}

2-2) async-await를 사용했을 때 문법(조금 더 짧은 코드)
const 함수명 = async () => {
    const json = await(
        await fetch(
            `api 주소`
        )
    ).json();
}

3) map 사용 시 주의할 점
map을 사용할 때는 꼭 key값을 주어야 한다!!! ex) id값
movies.map( (a) => (
    <div key={a.id}></div>
))

페이지 전환 (react router)
props를 사용하여 컴포넌트 방식으로 호출한다.
여기서 넘겨주는 props의 명칭은 사용자의 맘대로 설정해도 상관없음!
단, 무엇을 넘기는지 알아볼 수 있게 명칭을 정해주는것이 좋겠쥬?

라우터를 사용하게 되면 "기존 주소/명칭"을 통한 페이지 이동을 가능하게 해줌.

ReactRouter 는 동적
*/
