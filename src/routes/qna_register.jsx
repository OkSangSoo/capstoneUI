
import { Link } from "react-router-dom";
import { useState } from 'react';

import "./bgImage.css";
import "./qna_register.css";

function QnaRegister() {
    const [qnaTitle, setQnaTitle] = useState("");
    const [qnaDetail, setQnaDetail] = useState("");

    const handleRegister = e => {
        console.log(qnaTitle + " " + qnaDetail)
    }

    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">문의하기</h3>
                    
                </div>
                
                <div className="inputGrid">
                    <input onChange={e => setQnaTitle(e.target.value)} placeholder="문의 제목 입력" className="inputTitle"></input>
                    <textarea onChange={e => setQnaDetail(e.target.value)} placeholder="문의 내용 입력" className="inputDetail"></textarea>
                    {/* <input type="image" className="inputImage"></input> */}
                </div>

                <div>
                    <button onClick={handleRegister} className="registerButton">문의 등록</button>
                </div>
            </div>

        </main>
    );


}

export default QnaRegister;

//inputTitle, inputDetail auto Resize방법 찾아서 적용