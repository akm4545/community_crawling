import React from "react";

const HeaderTemplate = () => {
    return (
        <>
            <div className="cwarp2">
                <div id="symbol">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="header">
                <div id="cread">
                    <i></i>
                </div>
                <div className="cwarp2">
                    <div className={["block", "mr"].join(" ")}>
                        <div className="symbol_txt">
                            <div id="alert_t">
                                <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTemplate;