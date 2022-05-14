import React, { useState } from 'react';
import { UserContext } from '../App';

function drawPlayTime() {

    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    const r = 50;
    const t = r - 5;
    // convert time to draw point
    function time2canvas(input) {
        return (input - 3) / 6 * Math.PI;
    }

    // A.M. outframe & inside time range
    ctx.beginPath();
    ctx.arc(r + 5, r + 5, r, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(r + 5, r + 5, t, time2canvas(3), time2canvas(5));
    ctx.lineTo(r, r + 5);
    ctx.fill();
    ctx.closePath();

    // P.M. outframe & inside time range
    ctx.beginPath();
    ctx.arc(r + 120, r + 5, r, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(r + 120, r + 5, t, time2canvas(8), time2canvas(12));
    ctx.lineTo(r + 120, r + 5);
    ctx.fill();
    ctx.closePath();

    document.getElementById('myImage').src = c.toDataURL();
}



function CardResult() {
    const t = "t";
    return (<div>
        <div>result</div>
        <div class="img-thumbnail">
            <canvas id='myCanvas' />
            <img id='myImage' />
            <button onClick={drawPlayTime} />
        </div>
        <UserContext.Consumer>
            {value =>
                <div>
                    <img src={value.img_url} style={{ width: 200, height: 200 }} />
                    <p>{value.name}</p>
                </div>
            }
        </UserContext.Consumer>


    </div>
    );
}
export default CardResult;