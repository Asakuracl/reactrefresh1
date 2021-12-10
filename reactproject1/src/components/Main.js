import React from "react"

function Email() {
        const email = document.getElementsByClassName("email")
        email && alert("adresse mail :mail@mail.com") 
    }

    function Phone() {
        const phone = document.getElementsByClassName("phone")
        phone && alert("numéros de téléphone :010203") 
    }


function Main(props) {

    return (    
        <main>
            <img src={props.img} className="main--img"/>
            <h2 className="main--title">{props.mainTitle}</h2>
            <h3>{props.mainDescription}</h3>
            <p>{props.webAddress}</p>
            <div className="main--buttons">
                <button className="email" type="button" onClick={Email}>Email</button>
                <button className="phone" type="button" onClick={Phone}>Phone</button>
            </div>
            <h4>A propos</h4>
            <ul>
                <li>{props.aboutFirst}</li>
                <li>{props.aboutScd}</li>
            </ul>
            <h4>Compétences</h4>
            <ul>
                <li>{props.skillFirst}</li>
                <li>{props.skillScd}</li>
            </ul>  
        </main>
    )
}

export default Main