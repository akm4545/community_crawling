import React from "react";
import { Link } from "react-router-dom";

const TopListItem = ({crwaling}) => {
    console.log(crwaling.fileList[0]);

    return (
        <Link to={`/detail/${crwaling.idx}`}>
            <a className={["article", "t"].join(" ")} ss="issue_1103877">
                <div className="thumb"  style={{background : `url("http://localhost:8080/image?path=${encodeURI(crwaling.fileList[0] ? crwaling.fileList[0].path : "")}") no-repeat 50% 50% / cover`}}></div>
                <span className="title">
                    {crwaling.title}
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
        </Link>
    );
};

const MainTopListTemplate = ({marginClass, crwalingList, err, loading}) => {
    return (
        <div className={["aalist", "fl", `${marginClass ? marginClass : ""}`].join(" ")}>
            <div className="class_title">
                최신 이슈 모음
                <div className="right">
                    {/* <a className={"no_read"}>안읽은글</a> */}
                    <Link to={`/list`}>
                        <a className="more">더 보기</a>
                    </Link>
                </div>
            </div>
            <div className="list">
                {!loading && crwalingList && (crwalingList.map(data =>
                    <TopListItem
                        crwaling={data}
                        key={data.title}
                    >
                    </TopListItem>
                ))}
                {loading && (
                    "로딩중"
                )}
            </div>
        </div>
    );
};

export default MainTopListTemplate;