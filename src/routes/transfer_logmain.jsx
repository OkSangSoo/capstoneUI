import { Link } from "react-router-dom";
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';


import "./bgImage.css";
import "./transfer_logmain.css";



function TransferLogMain() {
    const [selectedTerm, setSelectedTerm] = useState('지난 1개월간');

    const items = [
        {key:'1', label: '지난 1개월간',}, {key:'2', label: '지난 3개월간',}, {key:'3', label: '지난 6개월간',}, 
    ];

    const handleNext = e =>{
        
    };

    return(
        <main className="backGround">
            <div className="mainScreen">
                <div className="header">
                    <Link to="/"><button className="arrow">&#129060;</button></Link>
                    <h3 className="headerText">거래내역</h3>
                    
                </div>
                    
                <div>

                </div>

            </div>

        </main>
    );


}

export default TransferLogMain;