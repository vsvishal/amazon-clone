import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../../hoc/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [address, setAddress] = useState("");

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    const URL =
      "https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, []);

  return (
    <nav className="header">
      <div className="header__top">
        {/* Logo on left */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/* Search box */}
        <div className="header__search">
          <input type="search" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__flag"></div>

        {/* 3 Links */}
        <div className="header__nav">
          {/* Link 1 - SignIn/SignOut */}
          <Link to={!user && "/login"} className="header__link">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          {/* Link 2 - Return Order */}
          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* Link 3 - Prime */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Try</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* Basket*/}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo basket__count">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        {/* Address */}
        <div className="header__address">
          <div className="header__address-icon">
            <RoomOutlinedIcon />
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">
              {address?.city}({address?.country_code})
            </span>
          </div>
        </div>
        {/* Nav */}
        <div className="header__bottom-nav">
          <span>
            <Link to="/products" className="header__link">
              All Products
            </Link>
          </span>
          <span>Mobile</span>
          <span>Best Sellers</span>
          <span>Today's Deal</span>
          <span>Prime</span>
          <span>Computers</span>
          <span>Pantry</span>
          <span>Electronics</span>
        </div>
        {/* Advt */}
        <div className="header__bottom-app">
          <img
            className="header__bottom-image"
            alt="Amazon App"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
