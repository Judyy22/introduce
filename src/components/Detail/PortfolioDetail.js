import React, { useEffect, useState } from "react";
import "./Detail.css";
import CardPage from "../DetailComponents/CardPage";
import Paging from "../DetailComponents/Paging";

const PortfolioDetail = () => {
    const [project, setProject] = useState([
        {
            id: 1,
            name: "Profile",
            pic: "profile.png",
            date: "2023.04.13 - 2023.04.21",
            link: "https://github.com/Judyy22/woodusproject",
            team: 0,
            skills: "Figma Illustrator React",
            stack: "Front-end",
            summary: "포트폴리오를 만들기위해 제작하게 되었습니다.",
        },
        {
            id: 2,
            name: "WOODUS",
            pic: "Woodus.png",
            date: "2023.03.25 - 2023.04.21",
            link: "https://github.com/Judyy22/woodusproject",
            team: 1,
            skills: "Figma Illustrator React Spring",
            stack: "Front-end",
            summary:
                "우드어스 사회적협동조합에서 홈페이지 제작 의뢰를 받아 제작하게 되었습니다.",
        },
        {
            id: 3,
            name: "Netflix",
            pic: "Netflix.png",
            date: "2022.12.13 - 2022.12.21",
            link: "https://judymovieproject.netlify.app",
            team: 0,
            skills: "React",
            stack: "Front-end",
            summary:
                "현재 상영중인 영화정보와 가장 인기있는 영화 곧 개봉될 영화의 정보를 알 수 있는 사이트 입니다. 보고싶은 영화를 검색 할 수 있으며 영화의 자세한 정보와 리뷰, 관련영상을 볼 수 있습니다. 반응형 페이지로 모바일에서도 볼 수 있습니다.",
        },
        {
            id: 4,
            name: "CCProject",
            pic: "CCproject.png",
            date: "2022.10.26 - 2022.11.09",
            link: "https://github.com/Judyy22/ccproject",
            team: 1,
            skills: "Spring Oracle",
            stack: "Full-stack (강의 목록과 상세조회부분)",
            summary:
                "교육기관등에서 사용할 수 있는 비대면 출결관리 시스템 입니다. 수강신청 및 취소가 가능하며 수업별로 출결을 관리 할 수 있습니다.각 수업마다 게시판을 이용하여 공지사항 전달 및 강의노트 작성이 가능합니다. 관리자가 강의추가, 수강신청 관리, 게시판 관리를 할 수 있습니다.",
        },
        {
            id: 5,
            name: "My Coffee",
            pic: "MyCoffee.png",
            date: "2022.09.05 - 2022.09.20",
            link: "https://github.com/Judyy22/mycoffee",
            team: 0,
            skills: "JSP Oracle ",
            stack: "Full-stack",
            summary:
                "카페에 가서 주문을 한 후 음료를 기다리는 시간을 아끼기 위해 개발하게 되었습니다. 모바일 주문 가능한 곳이 현재 있지만 웹으로 주문 할 수 있는곳은 별로 없는것으로 파악하여 프로젝트 주제로 선정하였습니다.",
        },
        {
            id: 6,
            name: "YH tour",
            pic: "YHtour.png",
            date: "2022.07.02 - 2022.07.03",
            link: "https://github.com/Judyy22/yhtour",
            team: 0,
            skills: "Html css js",
            stack: "Front-end",
            summary:
                "YH tour는 여행을 좋아하는 사람이 가고 싶은 여행지를 찾을 때 쓸 수 있는 페이지로 만들었습니다. 반응형 페이지로 모바일 버전으로도 사용 가능합니다.현재 다른 기능은 없이 홈페이지만 구현 했습니다.",
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = project.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const updatePostsPerPage = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 999) {
                setPostsPerPage(2);
            } else {
                setPostsPerPage(4);
            }
        };
        // Call the function once to set the initial value
        updatePostsPerPage();
        // Listen for window resize events to update the value
        window.addEventListener("resize", updatePostsPerPage);
        // Clean up the event listener on unmount
        return () => window.removeEventListener("resize", updatePostsPerPage);
    }, []);

    return (
        <div className="DetailBox">
            <div className="cardBox">
                {currentPosts.map((item) => (
                    <CardPage key={item.id} props={item} />
                ))}
            </div>
            <Paging
                postsPerPage={postsPerPage}
                totalPosts={project.length}
                paginate={paginate}
            />
        </div>
    );
};

export default PortfolioDetail;
