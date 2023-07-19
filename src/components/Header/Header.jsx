import React, { useState } from "react";
import Timer from "../Timer/Timer";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [remainingSeats, setRemainingSeats] = useState(
    Math.floor(Math.random() * 11) + 5
  );
  const navigate = useNavigate();
  const { cartData } = useSelector((state) => state.app);
  const cartQuantity = cartData.length;
  return (
    <div className="Header">
      <div className="Header-Top">
        <Timer />
        <div className="Cart-Icon-Container">
          <ShoppingCartOutlined
            className="Cart-Icon"
            onClick={() => navigate("/cart")}
          />
          <span className="Cart-Quantity">{cartQuantity}</span>
        </div>
      </div>
      <div className="Header-Bottom">
        <h2>Class Schedule</h2>
        <p>Free seats left:{remainingSeats}</p>
      </div>
    </div>
  );
};

export default Header;
