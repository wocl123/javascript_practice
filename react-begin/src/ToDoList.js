import { useState, useEffect } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My Yo Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

/*
form 은 submit 이벤트를 가지고 있다.
그래서 event.preventDefault() 함수를 이용해서 기본 동작을 막는다.

여러개를 받을 수 있는 배열
 => array element를 추가할 때는 [추가될 문자, ...array]
=> state는 직접적으로 수정이 불가능해서 함수를 가져와서 수정하게 만들어야 함.

setToDos( currentArray => [toDo, ...currentArray])
 => currentArray 배열에 toDo를 추가해줌.

map() = 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할을 함
새로운 array로 return 해줌!!
[].map( (item) => item) = 배열에 저장되어있는 item을 그대로 return 함
[].map( (item) => item.toUpperCase()) = 배열에 저장되어있는 item을 대문자로 return

단, 같은 component의 값을 반환할 때는 key값을 같이 반환해주어야 함!
[].map( (item, index) => <li key={index}>{item}</li>)
*/
