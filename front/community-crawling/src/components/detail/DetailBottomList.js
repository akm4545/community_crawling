import React from "react";

const DetailBottomList = () => {
    return (
        <div id="listIssue">
            <table className={["header", "aalist"].join(" ")}>
                <tbody>
                    <tr>
	                    <td className="dot"></td>
	                    <td className="subject">
                            ISSUE LIST
                            <span className="subcontext">
                                여러 사이트의 핫이슈를 모아 
                                <strong>최적화</strong> 
                                하여 보여줍니다.
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="/issue/notice" className="issue_notice">
                게시판 사용 안내 (마지막 수정일 : 2022/02/08 am00)
            </a>
            <table className="aalist">
                <tbody>
                    <tr>
                        <td className={["dot", "multi_open"].join(" ")}>
                            <div className="openarea">
                                <div className="dropen" aria-describedby="tipsy" tabIndex="0"></div>
                                <div className="allopen" aria-describedby="tipsy" tabIndex="0"></div>
                            </div>
                        </td>
                        <td>
                            <a className="article t" href="/issue/?idx=1075795_1" ss="issue_1075795_1">
                                <div className="thumb" style={{backgroundImage: "url(//i.aagag.com/mini/DSsdm.jpg)"}}></div>
                                <span className="title">
                                    {"원피스) 버기를 따르는 이유"}
                                    <span className="cmt">{"(8)"}</span>
                                </span>
                                <span className="btmlayer">
                                    <span className="byte">
                                        <u>0.7 MB</u>
                                    </span>
                                    <span className="hit">
                                        <u>8069</u>
                                    </span>
                                    <span className="good">
                                        <u>
                                            <i className={["f_aicon", "navit"].join(" ")}></i>
                                            43
                                        </u>
                                    </span>
                                    <span className="good">
                                        <u>
                                            <i className={["f_aicon", "good"].join(" ")}></i>
                                            3
                                        </u>
                                    </span>
                                    <span className={["time", "right"].join(" ")}>
                                        <u>
                                            <i className={["f_aicon", "clock"].join(" ")}></i>
                                            9분전
                                        </u>
                                    </span>
                                </span>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="pagingNoread" className="btn_warp">
                <a href="./?page=unread" className="change_btn">
                    <span className="txt"></span>
                </a>
            </div>
            <div className="btn_warp">
                <table className="paging">
                    <tbody>
                        <tr>
                            <td align="center">
                                <span className="number">
                                    <a href="?page=1" className="on">1</a>
                                    <a href="?page=2">2</a>
                                    <a href="?page=3">3</a>
                                    <a href="?page=4">4</a>
                                    <a href="?page=5">5</a>
                                    <a href="?page=6">6</a>
                                    <a href="?page=7">7</a>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form id="search_box" method="get" className="btn_warp">
                <table className="search_box">
                    <tbody>
                        <tr>
                            <td>
                                <input type="input" name="word" placeholder="검색"/>
                            </td>
                            <td className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={["feather", "clofeather-searchck"].join(" ")}>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                 Search
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default DetailBottomList;