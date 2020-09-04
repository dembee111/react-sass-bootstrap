import React from "react";
// import { logoImg } from "./assets/img/Logo/gobi.png";
import "./App.scss";

function App() {
  return (
    <div>
      <header>
        {/* Top Navbar */}
        <nav className="navbar navbar-light bg-secondary mx-auto">
          <a href="/" className="nav-link font-size-sm mx-auto text-white">
            打击地区顺丰包邮
          </a>
        </nav>
        {/* Middle Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="row">
                <div className="col-4">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        语言选择
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          EN
                        </a>
                        <a className="dropdown-item" href="#">
                          CN
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          JP
                        </a>
                      </div>
                    </li>
                    <form action="#" class="search">
                      <button class="search__button">
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
                        class="search__input"
                        placeholder="请输入搜索的关键词"
                      />
                    </form>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="navbar-nav mx-auto">
                    <a className="navbar-brand" href="#">
                      <img
                        src={require("./assets/img/Logo/gobi.png")}
                        width="86"
                        height="39"
                        alt=""
                      />
                    </a>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>{/* <img src={logoImg} width="86" height="39" alt="" /> */}</div>
    </div>
  );
}

export default App;
