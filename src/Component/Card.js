import React from "react";
import "./Card.css";



function Card(props) {
    return(
        <>

        
        <div className="cards" style={{display:props.change}}>
            <div className="card">
                <img src={props.imgsrc} alt={props.alt} className="card__img"/>
                <div className="card__info">
                    <h3 className="card__title">{props.title}</h3>
                    <ul className="card_li">
                    <li><span className="card__category">{props.distributor}</span></li>
                    <li><span className="card__category">{props.amount}</span></li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;