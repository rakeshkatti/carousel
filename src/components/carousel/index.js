import React, { useState } from "react";
import {
  LeftButton,
  RightButton,
  ImageContainer,
  CarouselContainer,
} from "./styled";

const Image = ({ src, current }) => {
  const left = 15 - 70 * current;
  return (
    <ImageContainer style={{ left: `${left}%` }}>
      <img src={src} alt={src} />
    </ImageContainer>
  );
};

const Carousel = ({ images }) => {
  const maxLength = images.length;
  const [current, setCurrent] = useState(0);

  return (
    <CarouselContainer>
      <LeftButton
        onClick={() => {
          if (current > 0) setCurrent(current - 1);
        }}
      >
        {"<"}
      </LeftButton>
      {images.map((image, identifier) => (
        <Image src={image} current={current} />
      ))}
      <RightButton
        onClick={() => {
          if (current < maxLength - 1) setCurrent(current + 1);
        }}
      >
        {">"}
      </RightButton>
    </CarouselContainer>
  );
};

export default Carousel;
