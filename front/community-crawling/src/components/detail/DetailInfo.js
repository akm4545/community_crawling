import React from "react";

const DetailInfo = () => {
    return (
        <h4 className={["other", "ns"].join(" ")}>
            <div>
                <span className={["t", "odate"].join(" ")}>2022-06-15 16:55</span>
                <span className={["t", "ago"].join(" ")}>30분전</span>
            </div>
            <div id="history_bar">
                <div className="list">
                    <div style={{backgroundColor: "#2671BF", width:"120.0px"}}>3</div>
                    <div style={{backgroundColor: "#5176CF", width:"40.0px"}}>1</div>
                    <div style={{backgroundColor: "#72CA47", width:"40.0px"}}>1</div>
                </div>
                <span className="t">총 5개의 출처 보기</span>
            </div>
            <div>
                <span className={["t", "date"].join(" ")}>
                    S:2022/06/14 
                    <i className="ago">(1일전)</i>
                     ~ E:2022/06/15 
                    <i className="ago">(1시간전)</i>
                </span>
            </div>
            <div className="addInfo"></div>
            <div className="clear"></div>
            <div id="download_btn">
                <span className={["t", "b5"].join(" ")}>
                    본문 내용 다운로드
                    <span className="download_icon">D</span>
                </span>
                <span className={["t", "b5", "tooltip"].join(" ")}></span>
            </div>
        </h4>
    );
};

export default DetailInfo;