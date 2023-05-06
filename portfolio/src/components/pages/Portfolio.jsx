import React from "react";
import matthew from "./d.jpg"
import travel from "./t.webp"
import jobLink from "./j.jpg"
import "../styles/Portfolio.css"
import comingSoon from "../../imgs/comingsoon.jpg"
export default function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <section className="portfolio ">
                <div className="contentImg">
                    <img src={jobLink}></img>
                    <div>
                        <h1> Job Link</h1>
                    </div>
                </div>
                <div className="contentImg">
                    <img src={travel}></img>
                    <div>
                    <h1>Hasty Infulencer</h1>
                    </div>
                </div>
                <div className="contentImg">
                    <img src={comingSoon}></img>
                    <div>
                    <h1>Next Project Slot</h1>
                    </div>
                </div>
                <div className="contentImg">
                    <img src={comingSoon}></img>
                    <div>
                    <h1>Next Project Slot</h1>
                    </div>
                </div>
                <div className="contentImg">
                    <img src={comingSoon}></img>
                    <div>
                    <h1>Next Project Slot</h1>
                    </div>
                </div>
                <div className="contentImg">
                    <img src={comingSoon}></img>
                    <div>
                    <h1>Next Project Slot</h1>
                    </div>
                </div>
            </section>



        </section>
    )
}