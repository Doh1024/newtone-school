import React from 'react'
import ShowMore from 'react-show-more-button'
import { useState } from 'react'

const Card = (props) => {
  return (
    <div>
      <div>
        <div class="max-w-sm m-3 shadow-xl bg-white rounded-2xl dark:bg-white">
          <img class="rounded-t-lg"  src={props.img} alt="" loading="lazy"/>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-montserrat font-bold tracking-tight text-gray-900 dark:text-dark-cyan">{props.prog}</h5>
            <p class="mb-3 font-normal italic text-gray-700 dark:text-dark-cyan">{props.level}</p>
            <ShowMore maxHeight={150}
            style={{fontWeight:'500', fontSize:'15px', padding:'10px'}}
            styleButton={{backgroundColor:'#B7AAE2', borderRadius:'10px', padding:'10px 10px'}}
            >
              <p class="mb-3 font-montserrat font-normal text-gray-700 dark:text-dark-cyan">{props.info}</p>
              <p class="mb-3 font-montserrat font-normal text-gray-700 dark:text-dark-cyan">{props.info2}</p>
            </ShowMore>        
            <p class="mb-3 font-montserrat font-semibold text-gray-700 dark:text-dark-cyan">{props.format}</p>
            <p class="mb-3 font-montserrat font-bold text-gray-700 dark:text-dark-cyan">{props.intake}</p>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Card
