import React from "react";

const DetailContentTemplate = ({data, loading, err}) => {
    console.log(data);

    return (
        <>
            <h1 className="title">
                {data.title}
            </h1>
            <div id="vContent" dangerouslySetInnerHTML={{__html: data.content}}>
                {/* <p>........
                    <br/>
                </p>
                <p>
                </p>
                <div className={["stag", "gif"].join(" ")} q="Fu1KL" style={{width : "600px", height: "338px"}}>
                    <video id="video_Fu1KL" poster="//i.aagag.com/o/Fu1KL.jpg" src="//i.aagag.com/Fu1KL.mp4" loop="" muted="" playsInline="" autoPlay="" preload="auto">
                        <source src="//i.aagag.com/Fu1KL.mp4" type="video/mp4"/>
                    </video>
                    <div className="s_opt">
                        <div className="v_speed_ctr">
                            <span sp="0.5">.5x</span>
                            <span className="on" sp="1">1x</span>
                            <span sp="2">2x</span>
                            <span className="n"></span>
                        </div>
                        <div className="v_volumn">
                            <div className="icon"></div>
                        </div>
                        <div className="v_time">
                            <span className="c">0</span>
                            /<span className="d">10</span>
                        </div>
                    </div>
                    <div className="v_progress">
                        <div className="bar" style={{width: "9.88689%"}}></div>
                    </div>
                </div>
                <p></p>
                <p> 
                    <br/>
                </p>
                <p></p>
                <div className={["stag", "ytb"].join(" ")} q="ysSGiLvzinM" style={{width: "724px", height: "470.894px"}}>
                    <iframe src="https://www.youtube.com/embed/ysSGiLvzinM" frameBorder="0" allowFullScreen=""></iframe>
                </div>
                <p></p> */}
            </div>
        </>
    );
};

export default DetailContentTemplate;