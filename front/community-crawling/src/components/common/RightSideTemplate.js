import React from "react";
import LoginFormTemplate from "./LoginFormTemplate";

const RightSideTemplate = () => {
    return (
        <div className="sidebar">
            <LoginFormTemplate></LoginFormTemplate>
            <div className="la l300x250">
            </div>
            <div id="sidebarbg" className="om"></div>
        </div>
    );
};

export default RightSideTemplate;