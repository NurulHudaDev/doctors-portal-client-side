import React from 'react';

const InfoCard = ({img, cardTitle, cardDescription, bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl text-white pl-5 ${bgClass}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardDescription}</p>
  </div>
</div>
        </div>
    )
}

export default InfoCard;