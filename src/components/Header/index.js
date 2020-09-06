import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        {/* Top Navbar */}
        <nav className="navbar navbar-light bg-secondary mx-auto py-0">
          <a href="/" className="nav-link font-size-sm mx-auto text-white">
            打击地区顺丰包邮
          </a>
        </nav>
        {/* Middle Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white pb-8 pb-lg-0">
          <a className="navbar-brand" href="!#">
            <img
              src={require("../../assets/img/Logo/gobi.png")}
              width="86"
              height="39"
              alt=""
            />
          </a>
          <div
            className="collapse navbar-collapse d-none d-lg-block"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  语言选择
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="!#">
                    EN
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="!#">
                    CN
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="!#">
                    JP
                  </a>
                </div>
              </li>
              <form action="!#" className="search">
                <button className="search__button">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7834 12.4285L10.0686 9.71362"
                      stroke="#7A7A7A"
                    />
                    <circle
                      cx="6.1281"
                      cy="5.6801"
                      r="5.16106"
                      stroke="#7A7A7A"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="search__input"
                  placeholder="请输入搜索的关键词"
                />
              </form>
            </ul>

            <ul className="navbar-nav ml-auto shop-icon">
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  <img
                    src={require("../../assets/img/icons/Vector.png")}
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item active menu-active">
                <a className="nav-link" href="!#">
                  <img
                    src={require("../../assets/img/icons/Group 416.png")}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* bottom-navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mr-5">
                <a className="nav-link font-weight-bold" href="!#">
                  新品 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link font-weight-bold" href="!#">
                  女士专区
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link  font-weight-bold" href="!#">
                  男士专区
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link font-weight-bold" href="!#">
                  家纺专区
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link font-weight-bold" href="!#">
                  配饰专区
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link font-weight-bold" href="!#">
                  童装专区
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="!#">
                  戈壁日记
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
