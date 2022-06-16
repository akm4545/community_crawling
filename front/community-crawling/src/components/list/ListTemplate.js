import React from "react";
import FooterTemplate from "../common/FooterTemplate";
import HeaderTemplate from "../common/HeaderTemplate";
import LeftSideTemplate from "../common/LeftSideTemplate";
import RightSideTemplate from "../common/RightSideTemplate";
import DetailBottomList from "../detail/DetailBottomList";

const ListTemplate = () => {
    return (
        <>
            <HeaderTemplate></HeaderTemplate>
            <div id="container" className="cwarp">
                <LeftSideTemplate></LeftSideTemplate>
                <div className="block">
                    <div className="reload"></div>
                    <div className={["aa", "margin_r"].join(" ")}></div>
                </div>
                <div id="content">
                    <DetailBottomList></DetailBottomList>
                    <div className={["la", "mid"].join(" ")}></div>
                </div>
                <RightSideTemplate></RightSideTemplate>
            </div>
            <div className="clear"></div>
            <FooterTemplate></FooterTemplate>
        </>
    );
};

export default ListTemplate;