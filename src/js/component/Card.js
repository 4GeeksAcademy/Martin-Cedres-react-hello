import React from "react"

function Card({ title, text, image }) {
    return (
        <div className="card mt-3" style={{ width: "15rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;


