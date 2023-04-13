import React, { useState } from "react";

export default function Wordcounter() {
  // khai báo biến
  const [Counted, setCounted] = useState({
    words: 0,
    letters: 0,
    paragraph: 0,
  });

  // lấy dữ liệu từ thẻ Textarea ra
  const handleTextarea = (event) => {
    const dataTextarea = event.target.value;
    console.log(dataTextarea);
    // khai báo index.leght người dùng nhập vào dataTextarea
    const words = dataTextarea.split(/\s+/).length;
    const letters = dataTextarea.replace(/[^a-z]/gi, "").length;
    const paragraphs = dataTextarea.split(/\n\n+/).length;
    setCounted({ words, letters, paragraphs });
  };

  // Hàm Bấm vào chữ hoa
  const handleUpperCase = () => {
    const index = document.querySelector("textarea").value;
    // lấy phần tử đầu tiên đc tìm thấy với tham số textarea
    document.querySelector("textarea").value = index.toUpperCase();
  };

  // Nhấp để hạ thấp
  const handleLowercse = () => {
    const index = document.querySelector("textarea").value;
    // lấy phần tử đầu tiên đc tìm thấy với tham số textarea
    document.querySelector("textarea").value = index.toLowerCase();
  };

  return (
    <div className="Wordcounter">
      <div>
        <div>
          <h2>Word Counter</h2>
        </div>
        <main className="container"> 
          <div className="form">
            <i class="fa-solid fa-pen-to-square"> Word : {Counted.words} </i> 
            <p></p>
          </div>
          <div className="form">
            <i class="fa-solid fa-pen-clip"> Letter : {Counted.letters} </i>
            <p></p>
          </div>
          <div className="form">
            <i class="fa-solid fa-book"> Paragraph : {Counted.paragraph}</i>
            <p></p>
          </div>
        </main>
        <textarea
          className="textImport"
          onChange={handleTextarea}
          placeholder="Enter, Paste Your Text Here" 
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="buttonClick">
          <button className="clickNow" onClick={handleUpperCase}> 
            Click to uppercase
          </button>
          <button className="clickNow" onClick={handleLowercse}> 
            Click to Lowercse 
          </button>
        </div>
      </div>
    </div>
  );
}
