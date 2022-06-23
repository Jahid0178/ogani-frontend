import React from "react";
import ProductOne from "../../../../Assets/Images/Products/cat-1.jpg";
import ProductTwo from "../../../../Assets/Images/Products/cat-2.jpg";
import ProductThree from "../../../../Assets/Images/Products/cat-3.jpg";
import ProductFour from "../../../../Assets/Images/Products/cat-4.jpg";
import ProductFive from "../../../../Assets/Images/Products/cat-5.jpg";
import { ProductSlider } from "../../../Components/Common/ProductSlider";

export const Banner = () => {
  const products = [
    ProductOne,
    ProductTwo,
    ProductThree,
    ProductFour,
    ProductFive,
  ];
  console.log(products);

  return (
    <div>
      <div>
        <ProductSlider products={products} />
      </div>
    </div>
  );
};
