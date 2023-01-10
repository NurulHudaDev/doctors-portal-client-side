import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription, bgClass }) => {
  return (
    <div>
      <div class={`card lg:card-side shadow-xl text-white pl-5 py-5 ${bgClass}`}>
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard;