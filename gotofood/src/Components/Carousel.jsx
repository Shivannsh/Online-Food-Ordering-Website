import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/500x500/?fruit" className="d-block w-100" style={{ "filter": "brightness(30%)" , "maxHeight":"500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" style={{ "filter": "brightness(30%)","maxHeight":"500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" style={{ "filter": "brightness(30%)","maxHeight":"500px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                <div class="carousel-caption" style={{ "zIndex": "1" }}>
                    <form class="d-flex">
                        <input class="form-control me-2 bg-dark " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0 d-inline" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </>
    )
}
