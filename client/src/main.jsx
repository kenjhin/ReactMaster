import React, { memo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  // リアクトは、関数形プログラミング基盤UIの設計
  // UseStateは、内部的にレンダリングできるSTATEの変更システム管理

  //[概念のまとめ] : 状態(State)管理のHOOK
  const [text, setText] = useState(""); // 空いた文字列 : 入力された文字を含んでいる変数    담고있다
  const [memos, setMemos] = useState([]); //　配列系 : メモの配列を含む変数？　→　メモの配列が何の意味？

  const handleAdd = () => {
    if (!text.trim()) return;
    // trim의 기능 : INPUT창에다 간혹 문장 앞뒤에 공백을 입력하는 경우가 생길수가 있는데 공백을 제거하는 역할
    // !text.trim() 은 : 앞뒤 공백 다 잘랐는데 아무 내용도 없으면 함수를 리턴시켜라= 함수 종료시켜라
    // 아래 셋 메모스가 실행이 안됌 는 알겠는데 왜 !텍스트 트림 이게 빈 문자열을 의미하는지 이해가 안가네
    //  !아니라면 / 텍스트(빈문자에).공백을 지웠어 근데 > 빈문자에 공백을 지웠는데 이게 아니라면 ? 이게아님?

    setMemos([...memos, { id: Date.now(), text }]);
    // ...스프레드 문법(배열 복사 ? )
    // { id: Date.now(), text } 새 메모 = 객체 추가
    // 다시한번 공부해보기 스프레드.. 희얀하네
    setText("");
    // 새 메모 등록하고 -> 텍스트 빈거로 만들기
  };

  const handleDelete = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  }; //memos 배열에 메모.아이디가 삭제하려는 id와 같지 않은거만 남겨라 = 필터 => 나머지만 남긴 새 배열을 다시 배치하는거
  // 지금 버튼누릉 아이디랑 배열 아이디랑 안같으면 (필터하셈=그것만 가져오셈)
  // 필터의 의미 끝

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>私だけのメモ帳</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メモを入力してください"
      />
      <button onClick={handleAdd}>保存</button>
      <ul>
        {/* 메모스라는 배열 안에 있는 메모들을 하나씩 반복해서 각 메모들을 lI태그로 만들어서화면에 표시해*/}
        {/* ID:~ , text: "~" */}
        {memos.map((memo) => (
          <li key={memo.id}>
            {memo.text}{" "}
            <button onClick={() => handleDelete(memo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// ENTRY File
