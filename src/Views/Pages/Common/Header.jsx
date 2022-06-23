import React from "react";
import {
  BsFillEnvelopeFill,
  BsTwitter,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/logo.png";

export const Header = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex md:flex-row justify-between items-center">
          <div>
            <span>
              <BsFillEnvelopeFill className="inline-block mr-2" />{" "}
              hello@colorlib.com
            </span>
            <span className="ml-4">Free Shipping for all Order of $99</span>
          </div>
          <div>
            <ul>
              <li className="inline-block mx-2">
                <FaFacebookF className="inline-block mr-2" />
                <BsTwitter className="inline-block mx-2" />
                <FaLinkedinIn className="inline-block mx-2" />
              </li>
              <li className="inline-block mx-2">
                <p>Language</p>
              </li>
              <li className="inline-block mx-2">
                <span>
                  <BsFillPersonFill className="inline-block" /> Login
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex flex-col items-start md:flex-row justify-between py-3">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul>
              <li className="block mx-0 md:inline-block md:mx-3 text-xl">
                <Link to="/">Home</Link>
              </li>
              <li className="block mx-0 md:inline-block md:mx-3 text-xl">
                <Link to="/about">About</Link>
              </li>
              <li className="block mx-0 md:inline-block md:mx-3 text-xl">
                <Link to="/products">Products</Link>
              </li>
              <li className="block mx-0 md:inline-block md:mx-3 text-xl">
                <Link to="/contact-us">Contact US</Link>
              </li>
            </ul>
          </div>
          <div>3</div>
        </div>
      </div>
    </>
  );
};
