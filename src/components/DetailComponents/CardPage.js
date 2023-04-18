import React from "react";
import "./DetailComponents.css";

const CardPage = (props) => {
    const item = props.props;
    console.log(item);
    return (
        <a
            href={item.link}
            target="_blank"
            className="col-lg-4 col-sm-8 cards"
            style={{
                backgroundImage: "url(" + `/pictures/${item?.pic}` + ")",
            }}
        >
            <div className="cards-view">
                <div className="cards-title">
                    <h2>{item?.name}</h2>
                    <div>
                        <div className="cards-date">{item?.date}</div>

                        {item.team === 1 ? (
                            <div className="cards-skills">팀 프로젝트</div>
                        ) : null}
                    </div>
                </div>

                <div className="cards-overview">
                    <div>사용기술 : {item?.skills}</div>
                    <div>개발 부분 : {item?.stack}</div>
                    <div>{item?.summary}</div>
                </div>
            </div>
        </a>
    );
};

export default CardPage;
