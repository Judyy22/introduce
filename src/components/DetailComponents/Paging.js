import React, { useState } from "react";

const Paging = ({ postsPerPage, totalPosts, paginate }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    };
    return (
        <nav className="pagingbox">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="pageItem">
                        <button
                            className={`pageLink ${
                                currentPage === number ? "active" : ""
                            }`}
                            onClick={() => handleClick(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Paging;
