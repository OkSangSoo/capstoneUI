import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

import "./bgImage.css";
import "./transfer_amount.css";
import "./transfer_account.css"; /* inputbox, nextbutton css 가져옴 */
import Modal from "react-modal";

Modal.setAppElement('#root');

function TransferAmt() {
    const location = useLocation();
    const [amount, setAmount] = useState("0");
    const [account, setAccount] = useState(location.state.account);
    const [name, setName] = useState("옥상수");
    

    const [openModal, setOpenModal] = useState(false);
    /*const [pwModal, setPwModal] = useState(false);*/

    const [error, setError] = useState("");
    const [errorModal, setErrorModal] = useState(false);

    const handleNext = e =>{
        if(amount==="0" || amount===""){
            e.preventDefault();
            setError("금액을 다시 확인해주세요.")
            setErrorModal(true);
        }
        else{
            setOpenModal(true);
            setError("");
        }
    };

    const addValue = e =>{
        //console.log(isNaN(amount) || amount==="");
        setAmount(parseInt(amount) + parseInt(e.target.value));
    };



    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">이체하기</h3>
                    
                </div>
                
                <div>
                    <div className="accountInfo">
                        <span className="fontGrey">받는 분</span>
                        <span className="fontBlack">{name}</span>
                        <span className="fontOrange">{account}</span>
                    </div>

                    <div>
                        <input onChange={e => setAmount(e.target.value)} placeholder="금액 입력" value={amount==="0" ? "" : amount} className="inputBox"></input>
                        <span className="fontTP">TP</span>
                        
                        <div className="incButton">
                            <button onClick={addValue} value={10} className="incTen">+10</button>                      
                            <button onClick={addValue} value={30} className="incThirty">+30</button>
                            <button onClick={addValue} value={60} className="incSixty">+60</button>
                        </div>
                    </div>

                </div>

                <div>
                <button onClick={handleNext} className="nextButton">다음</button>

                <Modal isOpen={errorModal} onRequestClose={() => setErrorModal(false)} className="modalError">
                    <span className="fontErrConfirm">{error}</span>
                    <button onClick={()=>setErrorModal(false)} className="errorConfirm">확인</button>
                </Modal>

                <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)} className="modalImage">
                    <div className="modalInfo">
                        <p className="fontGrey">받는 분</p>
                        <span className="fontBlack">{name} <span className="fontGrey">님</span></span>
                        <span className="fontOrange">{account}</span>
                        <br></br><br></br>
                        <p className="fontGrey">보내는 TIME PAY</p>
                        <span className="fontBlack">{amount}</span>
                        <span className="fontOrange">TP</span>
                    </div>
                    <button onClick={()=>setOpenModal(false)} className="modalClose">&#10005;</button>
                    <button onClick={()=>setOpenModal(false)} className="beforeModal">이전</button>
                    <Link to="/transfer/password" state={{account : account, amount : amount, name : name}}>"<button onClick={()=>setOpenModal(false)} className="nextModal">다음</button></Link>
                </Modal>

                <Link to="/transfer/account" ><button className="beforeButton">이전</button></Link>
                </div>
            </div>

        </main>
    );


}

export default TransferAmt;