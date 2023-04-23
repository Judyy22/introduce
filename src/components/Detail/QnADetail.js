import React, { useEffect, useState } from "react";
import "./Detail.css";

const QnADetail = () => {
    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(true);
    const [dot3, setDot3] = useState(true);
    const [dot4, setDot4] = useState(true);
    const [dot5, setDot5] = useState(true);
    const [dot6, setDot6] = useState(true);
    const [dot7, setDot7] = useState(true);
    const [dot8, setDot8] = useState(true);
    useEffect(() => {
        setDot1(true);
    }, []);
    const handleClickDot = (dotNum) => {
        console.log(dotNum);
        switch (dotNum) {
            case 1:
                setDot1(false);
                break;
            case 2:
                setDot2(false);
                break;
            case 3:
                setDot3(false);
                break;
            case 4:
                setDot4(false);
                break;
            case 5:
                setDot5(false);
                break;
            case 6:
                setDot6(false);
                break;
            case 7:
                setDot7(false);
                break;
            case 8:
                setDot8(false);
                break;
            default:
                // 예외 처리 로직
                break;
        }
    };

    return (
        <div className="DetailBox">
            <div className="talkBox">
                <div className="dialog">
                    <div className="talkContents">
                        <div className="Icon">
                            <img src="/pictures/icon1.png" width="100%" />
                        </div>
                        <div className="balloon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(1)}
                            >
                                <div className={dot1 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot1 ? "hide" : "log"}>
                                    전자공학과 졸업 후 하드웨어 개발자로
                                    일하셨네요. 하드웨어개발도 앞으로의 전망이
                                    좋은데, 왜 프로그래밍을 하려는건가요?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AnswerBox">
                        <div className="Answerballoon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(2)}
                            >
                                <div className={dot2 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot2 ? "hide" : "log"}>
                                    지금까지 제가 해온 일은 하드웨어의
                                    프로그래밍이 아니라 단순 회로도 작업과,
                                    생산관리를 주로 하고 있었습니다.
                                    하드웨어에서도 펌에어 개발이 있지만, IT로
                                    옮긴 이유는 제가 하고싶어하는일을 찾다가 IT
                                    직종으로 옮기게 되었습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dialog2">
                    <div className="talkContents">
                        <div className="Icon">
                            <img src="/pictures/icon1.png" width="100%" />
                        </div>
                        <div className="balloon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(3)}
                            >
                                <div className={dot3 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot3 ? "hide" : "log"}>
                                    위에서 말씀하신 하고싶은 일은 무엇인가요?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AnswerBox">
                        <div className="Answerballoon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(4)}
                            >
                                <div className={dot4 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot4 ? "hide" : "log"}>
                                    남들에게 보여지는 무언가를 컴퓨터로 만드는
                                    것을 좋아합니다. 다양한 종류가 있지만
                                    지금까지 공부해왔던 것 중에 웹 프로그래밍이
                                    가장 흥미가 생겨서 공부하게되었습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dialog3">
                    <div className="talkContents">
                        <div className="Icon">
                            <img src="/pictures/icon1.png" width="100%" />
                        </div>
                        <div className="balloon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(5)}
                            >
                                <div className={dot5 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot5 ? "hide" : "log"}>
                                    블록체인 기반 핀테크 및 보안 플랫폼 개발
                                    과정을 배우셨는데, 왜 웹개발을 하려고
                                    하시나요?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AnswerBox">
                        <div className="Answerballoon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(6)}
                            >
                                <div className={dot6 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot6 ? "hide" : "log"}>
                                    과정 이름은 장황하게 여러가지를 배우는것처럼
                                    보이나 사실 배운것은 웹프로그래밍 입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dialog4">
                    <div className="talkContents">
                        <div className="Icon">
                            <img src="/pictures/icon1.png" width="100%" />
                        </div>
                        <div className="balloon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(7)}
                            >
                                <div className={dot7 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot7 ? "hide" : "log"}>
                                    포트폴리오를 보니 백엔드로 하거나,
                                    풀스택으로 할 수 있는거 같은데 왜
                                    프론트엔드를 하시는건가요?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AnswerBox">
                        <div className="Answerballoon">
                            <div
                                className="contents"
                                onClick={() => handleClickDot(8)}
                            >
                                <div className={dot8 ? "dot" : "hide"}>
                                    . . .
                                </div>
                                <div className={dot8 ? "hide" : "log"}>
                                    앞서 말씀드렸듯이 저는 남들에게 보여지는것을
                                    만드는 일을 하고싶습니다. 그래서
                                    프론트엔드쪽으로 더욱 더 열심히 공부하게
                                    되었습니다. 풀스텍으로 넓게 공부하는것도
                                    좋은방법이겠지만 일단 하나라도 잘 해내자
                                    라는 생각입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QnADetail;
