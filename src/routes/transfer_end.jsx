import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import Card from "antd/es/card/Card";

import "./transfer_account.css";
import "./bgImage.css";
import "./transfer_end.css";

function TransferEnd() {
    const location = useLocation();
    const account = location.state.account;
    const amount = location.state.amount;
    const name = location.state.name;
    const date = new Date();
    const datestr = date.getFullYear() + "." + (date.getMonth()+1) + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">이체하기</h3>
                    
                </div>
                
                <div>
                <span className="menuInfo">이체 완료</span>
                <Card title="거래내역" className="transferInfo">
                <p>계좌번호 : {account}</p>
                <p>금액 : {amount}</p>
                <p>이름 : {name}</p>
                <p>거래일시 : {datestr}</p>
                </Card>
                
                </div>

                <div>
                <Link to="/"><button className="endButton">완료</button></Link>
                </div>
            </div>

        </main>
    );


}

export default TransferEnd;