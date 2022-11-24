import React from 'react';

export default function Info(){
    return (
        <div className="info">
            <img src="./images/download.jpg" />
            <h4>Karthick Muniswamy</h4>
            <h5>Frontend Developer</h5>
            <h6>Karthick.website</h6>
            <button className="fa fa-envelope-square email" type="button">Email</button>
            <button className="fa fa-linkedin-square linkedin" type="button">LinkedIn</button>
        </div>
    )
}