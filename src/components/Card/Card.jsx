import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Card = ({img,title,info}) => {

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-dark">{title}</h5>
            <p className="card-text text-dark">
                {info}
            </p>
            <ItemCount/>

        </div>
</div>

    )
}



export default Card;
