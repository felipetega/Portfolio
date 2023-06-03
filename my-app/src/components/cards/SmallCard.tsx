import React from 'react'

export default function SmallCard() {
  return (
<div className="card w-full bg-base-100 shadow-xl image-full m-2">
  <figure><img src="./favicon.ico" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
