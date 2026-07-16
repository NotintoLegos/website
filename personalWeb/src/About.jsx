import React from "react";
import Header from "./Header";
//import "about.css";

export default function About() {
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
            </div>
        </section>
        </>
    )
}