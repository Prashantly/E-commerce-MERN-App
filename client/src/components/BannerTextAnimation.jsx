import React from "react";
import Typist from "react-typist";

function BannerTextAnimation() {
  return (
    <Typist
      avgTypingDelay={50}
      startDelay={1000}
      cursor={{ show: true, blink: true, element: "|" }}
    >
      <span>Discover Our Latest Products</span>
    </Typist>
  );
}

export default BannerTextAnimation;
