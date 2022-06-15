import React from "react";

const DetailCommentWrite = () => {
    return (
        <div id="cmt_write_warp">
            <div id="cmt_info">
                <div className="total">
                    <span className="icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </span>
                    <span className="text">
                        전체 댓글
                    </span>
                    <span className="cnt">
                        {"[0]"}
                    </span>
                </div>
                <div className="reload">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                </div>
            </div>
            <div id="cmt_write" className="cmt_write">
                <div className="comment">
                    <textarea name="content" rows="4" placeholder="댓글은 로그인을 하셔야 이용하실 수 있습니다." maxlength="0"></textarea>
                </div>
                <div className="opt">
                    <label className={["btn", "bupload"].join(" ")}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </label>
                    <label for="cmt_submit" className={["btn", "submit", "disable"].join(" ")}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        <span className="text"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DetailCommentWrite;