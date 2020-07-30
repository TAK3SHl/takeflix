import React from 'react'
import arrowRigh from '../../../../assets/img/slider-arrow.png'


function RightArrow(props) {
    const { className, style, onClick } = props;
    console.log(style)
    return (
      <div
        
        className={className}
        style={{ ...style, display: "block", backgroundImage: {arrowRigh} }}
        onClick={onClick}
      >
          <img source={arrowRigh}/>

      </div>
    );
  }

  function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundImage: {arrowRigh} }}
        onClick={onClick}
      />
    );
  }

export {RightArrow, LeftArrow}