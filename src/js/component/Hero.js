import React from "react";

function Hero() {
    return (
        <div className="hero d-flex flex-column align-items-center justify-content-center mt-3"
            style={{ backgroundColor: '#f8f9fa', height: '40vh', textAlign: 'center' }}>
            <div>
                <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga.</p>
                <a href="#" className="btn btn-primary" style={{ float: 'left' }}>Call to acion!</a>
            </div>
        </div>
    )
}

export default Hero; 