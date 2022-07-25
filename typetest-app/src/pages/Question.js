import Qdata from "../asset/QuestionData";
import React, { useState, useNavigate } from "react";

function Question() {
  // const [oddNumber, setOddnumber] = useState(0);
  // const [evenNumber, setEvennumber] = useState(0);
  // const navigate = useNavigate();

  // console.log(Qdata[1]);
  return (
    <div>
      <ul>
        {Qdata.map((data) => (
          <li key={data.id}>
            {data.title}
            <br />
            {data.answera}
            {data.answerb}
            {data.answerc}
            {data.answerd}
            {data.answere}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
