import { Link } from "react-router-dom";
import { useState } from 'react';
import { Select, Card } from 'antd';


import "./bgImage.css";
import "./transfer_logmain.css";


function TransferLogMain() {
    const [selectedTerm, setSelectedTerm] = useState('지난 1개월간');
    const [searchVal, setSearchVal] = useState("");

    const transfers = [
        {code:0, amount: "100", account:"1234543", name:"AAA", date:"20230328", transferID:"1"},
        {code:1, amount: "200", account:"5432112", name:"BBB", date:"20230329", transferID:"2"},
        {code:0, amount: "150", account:"1234567", name:"CCC", date:"20230330", transferID:"3"},
    ];

    const terms = [
        {id:'1', value: '지난 1개월간',}, {id:'2', value: '지난 3개월간',}, {id:'3', value: '지난 6개월간',}, 
    ];

    const handleSearch = e =>{
        console.log(selectedTerm+ " " +searchVal)
    };

    const handleSelect = e =>{
        setSelectedTerm(e);
        //console.log(e);
    };

    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">거래내역</h3>
                    
                </div>
                    
                <div>
                    <div className="filterGrid">
                        <Select options = {terms} size = 'small' dropdownStyle={{textAlign : 'center' }}onChange={handleSelect} value={selectedTerm} className="selectTerm"></Select>
                        <input onChange={e => setSearchVal(e.target.value)} placeholder="거래대상 입력" value={searchVal} className="searchBox"></input>
                        <button onClick={handleSearch} className="searchButton">&#128270;</button>
                    </div>

                    <Card title="거래내역" className="mainBox">
                        {transfers.map((transfer) => (
                            <Card title={"Account : " + transfer.account} extra={<span style={transfer.code ? {color : 'blue'} : {color : 'red'}}>{transfer.code ? "입금" : "출금"}</span>} key={transfer.transferID} className="detailBox">
                                <p>{"Name : " + transfer.name}</p>
                                <p>{"Amount : " + transfer.amount}</p>
                                <p>{"Date : " + transfer.date}</p>
                            </Card>
                        ))}
                    </Card>
                </div>
            </div>

        </main>
    );


}

export default TransferLogMain;
