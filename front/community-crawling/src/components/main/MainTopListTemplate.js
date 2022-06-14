import React from "react";

const TopListItem = ({crwaling}) => {
    console.log(crwaling);

    return (
        <a className="article t" href="/issue/?idx=1103877" ss="issue_1103877">
            <div className="thumb" background={`url(${crwaling.thumbnail})`}></div>
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
    );
};

const MainTopListTemplate = ({marginClass, crwalingList, err, loading}) => {
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