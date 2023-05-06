import React from "react";
import "../styles/Home.css"
import matthew from './d.jpg'
export default function Home() {
    return (
        <div>
            <section className="AboutMe">
              
                <div>
                <img src={matthew}></img>
                </div >
                
                <div className='matt'>
               <h1>Hi, my name is Matthew</h1>
               <h3>Im a web developer from</h3>
               <h3>California</h3>
                </div>
            </section>
        </div>
    )
}