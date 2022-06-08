import React from "react";

const MainBottomListTemplate = ({marginClass}) => {
    return (
        <div className={["aalist", "mirror", "fl", `${marginClass ? marginClass : ""}`].join(" ")}>
            <div className="class_title">커뮤니티별 인기순 (3시간)
                <div className="right">
                    <a className="no_read">안읽은글</a>
                    <a href="https://aagag.com/mirror/?select=multi&amp;site=82cook|bobae|clien|ddanzi|fmkorea|humor|inven|mlbpark|ou|ppomppu|ruli|slrclub" className="more">
                        더 보기
                    </a>
                </div>
            </div>
            <a href="/mirror/re.php?ss=fmkorea_4703255355" ss="fmkorea_4703255355" className="article">
                <span className={["lo", "rank", "bc_fmkorea"].join(" ")}>1</span>
                <span className={["lpadding", "title"].join(" ")}>요즘 20대 여성 직장인 특징</span>
                <span className="roverlay">
                    <span className="cnt">1258</span>
                </span>
            </a>
        </div>
    );
};

export default MainBottomListTemplate;