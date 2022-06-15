import React from "react";

const DetailComment = () => {
    return (
        <>
            <div id="cmt_btns">
                <div id="comment_cnt" className="ns">
                    <span>댓글 
                        <strong className="cnt">8</strong>
                        개
                    </span>
                </div>
                <div id="comment_sort" className="cmt_sort_btns">
                    <span className={["ns", "on"].join(" ")} sort="default" aria-describedby="tipsy" tabIndex="0">기본</span>
                    <span className="ns" sort="all" aria-describedby="tipsy" tabIndex="0">전부보기</span>
                    <span className="ns" sort="best_tree" aria-describedby="tipsy" tabIndex="0">추천 트리만</span>
                    <span className="ns" sort="best_only" aria-describedby="tipsy" tabIndex="0">추천 댓글만</span>
                    <span className="ns" sort="disable" aria-describedby="tipsy" tabIndex="0">감추기</span>
                </div>
            </div>
            <div id="comment" className="icomment">
                <div className={["set", "none"].join(" ")}>
                    <div className="cmt" w_idx="2809446" name="c2809446">
                        <div className="lay">
                            <div className="bar">
                                <div className={["left", "ns"].join(" ")}>
                                    <i className="dicon"></i>
                                    <i className="nick" sid="tjdals0519">
                                        청국장민트초코조림
                                    </i>
                                    <i className="sir">
                                        님
                                    </i>
                                    <i className="date">
                                        [2022-06-15 16:57:08]
                                    </i>
                                    <i className="ago" date="2022-06-15 16:57:08">
                                        38 분전
                                    </i>
                                </div>
                                <div className={["right", "ns"].join(" ")}>
                                    <i className="alert">
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                        </svg>
                                    </i>
                                    <div className="vote">
                                        <i className="up" attr="up">
                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                            </svg>
                                            <u>0</u>
                                        </i>
                                        <strong className="sum">-</strong>
                                        <i className="down" attr="down">
                                            <u>0</u>
                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                개똥밟았네..
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailComment;