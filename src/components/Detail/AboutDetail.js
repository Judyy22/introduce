import React from "react";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutDetail = () => {
    return (
        <div className="DetailBox">
            <div className="MainIntro">
                <div>
                    <img src="/pictures/image.png" width="100" />
                </div>
                <div>
                    <div>이승희</div>
                    <div>1998.12.25 Seoul</div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https:github.com/Judyy22" target="_blank">
                            https:github.com/Judyy22
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <div>학력사항 / 수료</div>
                <table>
                    <thead>
                        <tr>
                            <th>재학기간</th>
                            <th>학교명</th>
                            <th>전공</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2017.03 ~ 2019.02</td>
                            <td>부산과학기술대학교</td>
                            <td>항공전자통신과</td>
                        </tr>
                        <tr>
                            <td>2019.03 ~ 2021.02</td>
                            <td>동아대학교</td>
                            <td>전자공학과</td>
                        </tr>
                        <tr>
                            <td>2022.06 ~ 2022.12</td>
                            <td>부산인재개발원 부산IT교육센터</td>
                            <td>
                                블록체인 기반 핀테크 및 보안 플랫폼 개발
                                (자바/리액트)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <div>사회활동</div>
                <table>
                    <thead>
                        <tr>
                            <th>기간</th>
                            <th>장소</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2021.06 ~ 2022.06</td>
                            <td>(주)한국미래에너지</td>
                            <td>
                                <div>- 하드웨어 회로 개발</div>
                                <div>- 부품 및 자재관리</div>
                                <div>- 생산관리</div>
                                <div>- 제품 케이스 도면 설계</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <div>Skills</div>
                <div>
                    <div>Design</div>
                    <div>
                        <div>일러스트</div>
                        <div>피그마</div>
                    </div>
                </div>
                <div>
                    <div>Front-End</div>
                    <div>
                        <div>Html css js</div>
                        <div>React</div>
                    </div>
                </div>
                <div>
                    <div>Back-End</div>
                    <div>
                        <div>java</div>
                    </div>
                </div>
                <div>
                    <div>DB</div>
                    <div>
                        <div>Oracle</div>
                        <div>MySql</div>
                    </div>
                </div>
                <div>
                    <div>Code Editor</div>
                    <div>
                        <div>VS Code</div>
                        <div>Eclipse</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;
