import React from "react";
import Logo from "../../../Assets/Images/logo.png";

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src={Logo} alt="" />
            <h6>Address: 60-49 Road 11378 New York</h6>
            <p>Phone: +65 11.188.888</p>
            <p>Email: hello@colorlib.com</p>
          </div>
          <div>
            <h6 className="font-bold">Useful Links</h6>
            <ul>
              <li>About US</li>
              <li>Contact US</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold">Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
          </div>
        </div>
      </div>
    </>
  );
};
