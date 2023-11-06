import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

export default function Home() {
  const [category, setcategory] = useState([]);
  const [items, setItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/Displaydata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data[0]);
        setItems(data[0]);
        setcategory(data[1]);
      } else {
        console.error(
          "Failed to fetch data. Response status:",
          response.status
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>   {/* Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"cover"}}>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/500x500/?cheese" className="d-block w-100" style={{ "filter": "brightness(60%)" , "maxHeight":"600px" ,"objectFit":"cover"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/500x500/?burger" className="d-block w-100" style={{ "filter": "brightness(60%)","maxHeight":"600px","objectFit":"cover" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/500x500/?pastry" className="d-block w-100" style={{ "filter": "brightness(60%)","maxHeight":"600px","objectFit":"cover" }} alt="..." />
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
      </div>






    {/* Display Items */}
      <div className="container">
        {category.length > 0
          ? category.map((cat_name) => {
              return (
                <div key={cat_name._id}>
                  <div className="fs-3 m-3 justify-content-start d-flex">
                    {cat_name.CategoryName}
                  </div>
                  <br style={{ color: 'black' }} />
                  <div className="d-flex flex-wrap justify-content-start align-items-centre w-100">
                    {items.length > 0
                      ? items
                          .filter((item) => {
                            return item.CategoryName === cat_name.CategoryName;              // items.filter(#Conditiom) lagai then .map se filteted data(filteted food items as per category in this case ) ko map kiya
                          })
                          .map((data) => {
                            return (
                              <div key={data._id}>
                                <Card
                                  className="m-2"
                                  name={data.name}
                                  price={data.options[0]}
                                  image={data.img}
                                  category={data.CategoryName}
                                  description={data.description}
                                />
                              </div>
                            );
                          })
                      : ""}
                  </div>
                </div>
              );
            })
          : ""}
      </div>


      <Footer />
    </>
  );
}
