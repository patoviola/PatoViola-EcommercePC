import React from "react";

const Card = ({img,title,info,textButton}) => {

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-dark">{title}</h5>
            <p className="card-text text-dark">
                {info}
            </p>
            <button className="btn btn-primary">
                {textButton}
            </button>
        </div>
</div>

    )
}





export default Card;
