import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Ticker = () => {
  return (
    <div className="bg-dark">
    <Carousel indicators={false}>

        <Carousel.Item className="">
                <h5 className="text-light">FREE shipping on all orders!</h5>
        </Carousel.Item>
        <Carousel.Item className="">
                <h5 className="text-light">Restock incoming!</h5>
        </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Ticker;
