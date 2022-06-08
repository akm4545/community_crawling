import React from "react";

const MainTopListTemplate = ({marginClass}) => {
    return (
        <div className={["aalist", "fl", `${marginClass ? marginClass : ""}`].join(" ")}>
            <div className="class_title">
                최신 이슈 모음
                <div className="right">
                    {/* <a className={"no_read"}>안읽은글</a> */}
                    <a href="https://aagag.com/issue/" className="more">더 보기</a>
                </div>
            </div>
            <div className="list">
                <a className="article t" href="/issue/?idx=1103877" ss="issue_1103877">
                    <div className="thumb" background={"background-image:url(//i.aagag.com/mini/FsjNc.jpg);"}></div>
                    <span className="title">
                        요즘애들이 연필 한 다스가 몇 자룬지 모르는 이유
                        <span className="cmt">(8)</span>
                    </span>
                    <span className="btmlayer">
                        <span className="byte">
                            <u>0.4 MB</u>
                        </span>
                        <span className="hit">
                            <u>768</u>
                        </span>
                        <span className="good">
                            <u>
                                <i className={["f_aicon", "navit"].join(" ")}></i>
                                5
                            </u>
                        </span>
                        <span className="good">
                            <u>
                                <i className={["f_aicon", "good"].join(" ")}></i>
                                1
                            </u>
                        </span>
                        <span className={["time", "right"].join(" ")}>
                            <u>
                                <i className={["f_aicon", "clock"].join(" ")}></i>
                                7분전
                            </u>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default MainTopListTemplate;