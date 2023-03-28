import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import InputMask from 'react-input-mask';

import "./transfer_account.css";
import "./bgImage.css";
import "./transfer_password.css";

function TransferPw() {
    const location = useLocation();
    const [account, setAccount] = useState(location.state.account);
    const [amount, setAmount] = useState(location.state.amount);
    const [name, setName] = useState(location.state.name);

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const passwordCorrect = true;

    const handleNext = e =>{
        if(password === "") {
            setError("비밀번호 오류. 다시 입력해주세요.");
            e.preventDefault();
        }
        else{
            setError("");
            //console.log("correct password");
        }
    };

    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">이체하기</h3>
                    
                </div>
                
                <div>
                <span className="menuInfo">거래 비밀번호 입력</span>
                <input type='password' onChange={e => setPassword(e.target.value)} placeholder="비밀번호입력" value={password||""} className="inputBox"></input>
                <span className="errorMessage">{error}</span>
                </div>

                <div>
                <Link to="/transfer/amount" state={{account : account}}><button className="beforeButton">이전</button></Link>
                <Link to="/transfer/end" state={{account : account, amount : amount, name : name}}><button onClick={handleNext} className="nextButton">이체</button></Link>
                </div>
            </div>

        </main>
    );


}

export default TransferPw;