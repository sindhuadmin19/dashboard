import React from "react";
import "./sidebar.css";

import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="middle">
        <div className="c1">
          <p>
            Patient Queue
            <a>
              {" "}
              <IoSearch />
            </a>
          </p>
          <a className="button">
            <button>All</button> <button>Oldest</button> <button>Newest</button>
          </a>
        </div>
        <div className="c2">
          <div className="img1">
            <div className="g">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="m">
              <BsThreeDots />
            </div>
          </div>
          <div className="name">
            <a>Darlene Robertson</a>
          </div>
          <div className="regi">
            Register 12 March 2023
            <a className="arrow">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="c3">
          <div className="img1">
            <div className="g">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="m">
              <BsThreeDots />
            </div>
          </div>
          <div className="name">
            <a>Albert Flores</a>
          </div>
          <div className="regi">
            Register 12 March 2023
            <a className="arrow">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="c4">
          <div className="img1">
            <div className="g">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="m">
              <BsThreeDots />
            </div>
          </div>
          <div className="name">
            <a>Savannah Nguyen</a>
          </div>
          <div className="regi">
            Register 12 March 2023
            <a className="arrow">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="c5">
          <div className="img1">
            <div className="g">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="m">
              <BsThreeDots />
            </div>
          </div>
          <div className="name">
            <a>Jenny Wilson</a>
          </div>
          <div className="regi">
            Register 12 March 2023
            <a className="arrow">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="c6">
          <div className="img1">
            <div className="g">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="m">
              <BsThreeDots />
            </div>
          </div>
          <div className="name">
            <a>Karthryn Murphy</a>
          </div>
          <div className="regi">
            Register 12 March 2023
            <a className="arrow">
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
