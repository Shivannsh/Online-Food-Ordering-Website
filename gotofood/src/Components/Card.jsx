import React from 'react'

export default function Card() {
  return (
    <div>

                <div className="card mt-3 w-100 h-40 m-2" style={{ "width": "18rem", "maxHeight": "600px" }}>
                    <img className="card-img-top" src="https://source.unsplash.com/random/300x300" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some Important Text Here</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return <option key={i + 1} value={i + 1}>{i + 1}</option>
                                })}
                            </select>

                            <select className='m-1 h-100 bg-success rounded'>
                                <option value="1">Small</option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
                            </select>

                            <div className='d-inline h-100 fs-5'> Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
