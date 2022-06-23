import React from "react";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Main } from "./Common/Main";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
