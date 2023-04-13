import React, { useEffect, useState } from "react";
import "./Menubar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menubar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState();

    useEffect(() => {
        const nowPath = location.pathname;
        const slicePath = nowPath.split("/").filter(Boolean);

        if (slicePath == "about") {
            setCategory("about");
        } else if (slicePath == "portfolio") {
            setCategory("portfolio");
        } else if (slicePath == "qna") {
            setCategory("qna");
        } else if (slicePath == "contact") {
            setCategory("contact");
        }
    }, []);

    const changePage = (id) => {
        setCategory(id);
        navigate(`/${id}`);
    };
    return (
        <div className="MenubarBox">
            <div id="home" onClick={() => changePage("")}>
                Home
            </div>
            <div
                id="about"
                className={category === "about" ? "active" : ""}
                onClick={() => changePage("about")}
            >
                About
            </div>
            <div
                id="portfolio"
                className={category === "portfolio" ? "active" : ""}
                onClick={() => changePage("portfolio")}
            >
                Portfolio
            </div>
            <div
                id="qna"
                className={category === "qna" ? "active" : ""}
                onClick={() => changePage("qna")}
            >
                QnA
            </div>
            <div
                id="contact"
                className={category === "contact" ? "active" : ""}
                onClick={() => changePage("contact")}
            >
                Contact
            </div>
        </div>
    );
};

export default Menubar;
