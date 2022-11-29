import React from 'react'

const MovieImg = (props) => {
  return (
    <img
    className={props?.className}
    src={props?.src}
    alt={props?.alt} />
  )
}

export default MovieImg