import React from "react";

const DetailBottomMenu = () => {
    return (
        <div id="ioptbar">
            <div className={["box", "ns"].join(" ")} id="liveView">
                <span className="exp">LIVE VIEW</span>
                <span className="cnt">73</span>
            </div>
            <div className={["box", "ns"].join(" ")} id="clip">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
                <span className="tx">클립</span>
            </div>
            <div className={["box", "ns"].join(" ")} id="issue_doubt">
                <span className="tx">주작</span>
                <i></i>
            </div>
            <div className={["box", "ns"].join(" ")} id="issue_politics">
                <span className="tx">정치</span>
                <i></i>
            </div>
            <div className={["box", "ns"].join(" ")} id="issue_alert" mode="alert_want_delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={["feather", "feather-alert-triangle"].join(" ")}>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12" y2="17"></line>
                </svg>
                <span className="tx">신고</span>
            </div>
        </div>
    );
};

export default DetailBottomMenu;