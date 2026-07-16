import React from "react";
import Header from "./Header";
//import "about.css";
import resume from "../public/John-Hope-Resume-PDF.pdf";

export default function About() {
    function DownloadButton() {
        return (
            <a href={resume} download="John-Hope-Resume-PDF.pdf">
                <button> Download Resume</button>
            </a>
        )
    }
    return (
        <>
        <section id="header">
            <Header className="head" />
        </section>
        <section>
            <div className="body">
                <h1>About Page Testing</h1>
                <button onClick={() => window.location.href = '/'}>
                    Back to Home
                </button>
                <DownloadButton></DownloadButton>
            </div>
        </section>
        </>
    )
}