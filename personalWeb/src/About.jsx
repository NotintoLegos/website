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
                <h1>About Me</h1>
                <p>Hi everyone! I’m a new computer science graduate from DePaul University. I finished with a 3.5 GPA and a concentration in software development.</p>
                <p>I am a ‘maker’, I pretty much love building everything I can. My hobbies range from programming and woodworking to cooking and now board game design. When I’m not building, I’m doing speed puzzling with my partner, out golfing, or watching way too much NBA content.</p>
                <p>I built this website to showcase some of my projects / random stuff I’ve made and work on React web development.</p>
                <p>I’m currently seeking a developer role in the Chicago area, if you’d like to get in contact with me, please reach out through email on the ‘contact’ link.</p>
                
            </div>
            
        </section>
        <section id= "footer">
            <div>
                <button onClick={() => window.location.href = '/'}>
                    Back to Home
                </button>
                <DownloadButton></DownloadButton>
            </div>
        </section>
        </>
    )
}