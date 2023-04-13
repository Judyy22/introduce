import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Hello.css";
import { useNavigate } from "react-router-dom";

const textArray = [
    "끊임없이 성장하는",
    "신뢰할 수 있는",
    "포기를 모르는",
    "언제나 도전하는",
];

const Hello = () => {
    const navigate = useNavigate();
    const [showTitle, setShowTitle] = useState(""); //n초마다 이전 텍스트 + 현재 텍스트 합쳐줌
    const [count, setCount] = useState(0); //글자 수 카운트
    const [textCount, setTextCount] = useState(0); //글자 배열 카운트
    const text = textArray[textCount]; //완성할 텍스트

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setShowTitle((prevTitleValue) => {
                let result = prevTitleValue
                    ? prevTitleValue + text[count]
                    : text[0];
                setCount(count + 1);

                if (count == text.length) {
                    setCount(0);
                    setShowTitle("");
                    if (textCount == textArray.length - 1) {
                        setTextCount(0);
                    } else {
                        setTextCount(textCount + 1);
                    }
                }

                return result;
            });
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    });

    const enterPage = () => {
        navigate("/about");
    };

    return (
        <div className="homemain">
            <div className="textbox" onClick={enterPage}>
                <div className="first-textbox">Hi, I am</div>
                <div className="randomBox">
                    <div className="randomText">{showTitle}</div>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="glassicon"
                    />
                </div>
                <div className="developer">Developer</div>
                <div className="name">안녕하세요, 이승희 입니다.</div>
            </div>
        </div>
    );
};

export default Hello;
