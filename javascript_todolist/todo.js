const User_Input = document.querySelector(".container input");
const Add_Btn = document.querySelector(".container button");
const Todo = document.querySelector(".todo_list");
const ClearAll = document.querySelector(".footer button");
/*
onkeydown : 키를 눌렀을 때 이벤트. (한영변환, 한자 등 특수키는 인식 X)
onkeyup : 키를 눌렀다가 땠을 때 이벤트
onkeypress : 실제로 글자가 써질 때 이벤트
*/

//input 칸에 유저의 입력이 있는지 없는지 확인
User_Input.onkeyup = () =>{
    let userData = User_Input.value;
    
    if(userData.trim() != 0){ //문자가 1개라도 입력이 되어있다면 active 클래스 추가
        Add_Btn.classList.add("active");
    }else{                    //입력칸에 문자가 아무것도 없다면 active 클래스 제거
        Add_Btn.classList.remove("active");
    }
}
showTasks();

// '+' 버튼을 눌렀을 때
Add_Btn.onclick = () => {
    let userData = User_Input.value;
    let getLocalStorge = localStorage.getItem("New Todo"); 
    /*localStorage : 브라우저에 key-value값을 Storage에 저장 가능
    setItem() : key, value 추가
    getItem() : value 읽어오기
    removeItem() : item 삭제
    clear() : 도메인 내의 localStorage 값 삭제*/
    
    if(getLocalStorge == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorge);
    }
    listArr.push(userData); //배열에 유저입력값 push
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //key : New Todo, value : listArr을 JSON 문자열로 변환한 값
    showTasks();
}

function showTasks(){
    let getLocalStorge = localStorage.getItem("New Todo");
    if(getLocalStorge == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorge); // JSON 문자열을 JavaScript 객체로 변환
    }
    let newLiTag = '';
    const todo_num = document.querySelector(".todo_num");
    todo_num.textContent = listArr.length;
    //배열의 저장된 값(길이)를 비교하여 clear All 버튼 활성화
    if(listArr.length > 0){
        ClearAll.classList.add("active");
    }else{
        ClearAll.classList.remove("active");
    }
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTasks(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    Todo.innerHTML = newLiTag;
    User_Input.value = ""; // + 버튼으로 추가하고 난 뒤 input 창 비우기
}

function deleteTasks(index){
    let getLocalStorge = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorge);
    //splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용 변경
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//ClearAll 버튼 누르면 listArr 배열의 값은 모두 지운채로 setItem 실행
ClearAll.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}