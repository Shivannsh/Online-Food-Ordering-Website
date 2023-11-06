import React from "react";

export default function Card(props) {

    let options =props.price  // options is an object i.e key value pair me data stored but we want only keys so we use Object.keys(options)
    let priceOptions = Object.keys(options)

  return (
    <div>
      <div className="card mt-3 m-2" style={{ width: "18rem" }}>
        <div style={{ paddingBottom: "100%", position: "relative" }}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card image cap"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover", // To maintain aspect ratio
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-1 h-100 bg-success rounded">
                {priceOptions.map((data) => {
                    return (
                    <option key={data} value={data}>    {/* key is used to identify each option uniquely i.e map me use hone vali key h ye     */}
                        {data}                  {/* value is basically value of element that will be submitted when the user makes a selection from the dropdown */}
                    </option>
                    );
                })}
              
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          
<div style={{"height":"0.5px", "color":"black", "backgroundColor":"black"}}/><br/>

          <button className="btn btn-success justify-center ms-2 fs-6" >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
