import React from 'react'


const Card = (props) => {
  return (
    <div>
      <div>
        <div class="max-w-sm m-3 shadow-xl bg-white rounded-2xl dark:bg-white">
          <img class="rounded-t-lg"  src={props.img} alt="" loading="lazy"/>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark-cyan">{props.prog}</h5>
            <p class="mb-3 font-normal italic text-gray-700 dark:text-dark-cyan">{props.level}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-dark-cyan">{props.length}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-dark-cyan">{props.info}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-dark-cyan">{props.info2}</p>
            <p class="mb-3 font-semibold text-gray-700 dark:text-dark-cyan">{props.format}</p>
            <p class="mb-3 font-bold text-gray-700 dark:text-dark-cyan">{props.intake}</p>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Card
