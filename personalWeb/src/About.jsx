import React from "react";
//import "about.css";

export default function About() {
    return (
        <div className="body">
            <h1>About Page Testing</h1>
            <button onClick={() => window.location.href = '/'}>
                Back to Home
            </button>
        </div>
    )
}