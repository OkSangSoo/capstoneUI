import { Link } from "react-router-dom";
import { useState } from 'react';

import "./transfer_account.css";
import "./bgImage.css";

function TransferAcc() {
    const [account, setAccount] = useState("");
    const [error, setError] = useState("");

    const accountExist = true;
    const handleNext = e =>{
        if(accountExist === false || account === "") {
            e.preventDefault();
            setError("계좌번호 오류. 다시 입력해주세요.")
        }
        //console.log("clicked : " + account);
        //window.location.href = "/transfer/amount" > Link 태그로 대체
    };

    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">이체하기</h3>
                    
                </div>
                
                <div>
                <span className="menuInfo">계좌번호 입력</span>
                <input onChange={e => setAccount(e.target.value)} placeholder="계좌 번호 입력" value={account||""} className="inputBox"></input>
                <span className="errorMessage">{error}</span>
                </div>

                <div>
                <Link to="/transfer/amount" state={{account : account}}><button onClick={handleNext} className="nextButton">다음</button></Link>
                <Link to="/" ><button className="beforeButton">이전</button></Link>
                </div>
            </div>

        </main>
    );


}

export default TransferAcc;