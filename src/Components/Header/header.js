import React, { useState, useEffect, useContext } from "react";

import logo from "../../Asserts/cafelogo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
//Context Api
import { ContextApi } from "../../ContextApi/ContextApi";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t, i18n } = useTranslation();
  const [values, setvalues] = useState(false);
  const [btMenu, setBtMenu] = useState("");
  const handleOpen = () => {
    setvalues(!values);
    setBtMenu("close");
    console.log("clicked");
  };
  const handleOpen1 = () => {
    setvalues(!values);
    setBtMenu("burger");
    console.log("clicked");
  };
  console.log(values);
  const contextType = useContext(ContextApi);
  useEffect(() => {
    setvalues({ counter: contextType.Cart.length });
  }, [contextType]);
  console.log("counter", contextType.counter);
  console.log(contextType.Cart?.length);
  return (
    <div>
      <div>
        <header id="mad-header" className="mad-header with-bg header-white">
          <div className="mad-header-section--sticky-xl">
            <div className="containerr">
              <div className="mad-header-items" style={{ margin: '0px 45px' }}>
                <div className="mad-header-item">
                  <a href="/home" className="mad-logo">
                    <img src={logo} alt="" className="footer-Logo" />
                  </a>
                </div>

                <nav className="mad-navigation-container">
                  <ul className="mad-navigation mad-navigation--vertical-sm none-mobile">
                    {/* <Link to="/home"> */}
                    <li className="menu-item menu-item-has-children">
                      <Link to="/home">{t("Nav.3")}</Link>
                    </li>
                    {/* </Link>
                  <Link to="/aboutus"> */}
                    <li className="menu-item menu-item-has-children">
                      <Link to="/aboutus">{t("Navs.4")}</Link>
                    </li>

                    <li className="menu-item menu-item-has-children mega-menu">
                      <Link to="/UserMenu">{t("Navss.5")}</Link>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <Link to="/ourSpeciality">{t("Navsss.6")}</Link>
                    </li>

                    <li className="menu-item menu-item-has-children mega-menu">
                      <Link to="/store">{t("Navssss.7")}</Link>
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                      <Link to="/contactus">{t("Navsssss.8")}</Link>
                    </li>
                  </ul>

                  {values && (
                    <ul className="mad-navigation mad-navigation--vertical-sm none-web">
                      <li className="menu-item menu-item-has-children">
                        <Link to="/home">Home</Link>
                      </li>

                      <li className="menu-item menu-item-has-children">
                        <Link to="/aboutus">About Us</Link>
                      </li>

                      <li className="menu-item menu-item-has-children mega-menu">
                        <Link to="/UserMenu">Menu</Link>
                      </li>
                      <li className="menu-item menu-item-has-children mega-menu">
                        <Link to="/ourSpeciality">Our Speciality</Link>
                      </li>

                      <li className="menu-item menu-item-has-children mega-menu">
                        <Link to="/store"> Store</Link>
                      </li>
                      <li className="menu-item menu-item-has-children mega-menu">
                        <Link to="/contactus">Contact Us</Link>
                      </li>

                      <li className="menu-item menu-item-has-children mega-menu">
                        <a
                          href="/cart"
                          type="button"
                          class="mad-item-link mad-dropdown-title"
                        >
                          {/* <i class="material-icons">shopping_cart</i> */}
                          Cart {contextType.storeItems.length}
                        </a>
                      </li>
                    </ul>
                  )}

                  {/* </nav> */}
                  <div class="mad-actions">
                    <div class="mad-item mad-dropdown none-mobile">
                      <Link
                        href="/cart"
                        type="button"
                        class="mad-item-link mad-dropdown-title"
                        to="/cart"
                      >
                        <span class="mad-count">
                          {contextType.storeItems.length}
                        </span>
                        {/* <i class="material-icons">shopping_cart</i> */}
                        <FaShoppingCart size={23} />
                      </Link>
                    </div>
                    <div className="none-web">
                      {btMenu === "burger" ? (
                        <GiHamburgerMenu
                          size={25}
                          onClick={handleOpen}
                          color="white"
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <AiOutlineClose
                          size={25}
                          onClick={handleOpen1}
                          color="white"
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
