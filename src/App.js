import React from "react";
// import { logoImg } from "./assets/img/Logo/gobi.png";
import "./App.scss";

function App() {
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
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="#">
            <img
              src={require("./assets/img/Logo/gobi.png")}
              width="86"
              height="39"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <form action="#" className="search">
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
                <a className="nav-link" href="#">
                  <img src={require("./assets/img/icons/Vector.png")} alt="" />
                </a>
              </li>
              <li className="nav-item active menu-active">
                <a className="nav-link" href="#">
                  <img
                    src={require("./assets/img/icons/Group 416.png")}
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
              <li className="nav-item active mr-4">
                <a className="nav-link font-weight-bold" href="#">
                  新品 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link font-weight-bold" href="#">
                  女士专区
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link  font-weight-bold" href="#">
                  男士专区
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link font-weight-bold" href="#">
                  家纺专区
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link font-weight-bold" href="#">
                  配饰专区
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link font-weight-bold" href="#">
                  童装专区
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link font-weight-bold" href="#">
                  戈壁日记
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("./assets/img/Header-photo.png")}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./assets/img/Header-photo-1.png")}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <section className="py-6 py-md-10">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-5">
              <h4 className="text-center">
                春意弥漫空中！是的，现在您就可以穿着全新羊绒服上街了！具有轻盈柔和质感的#全新春夏系列，将在这个不一样的季节为您带来春夏独特的温暖和崭新体验
              </h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">裙装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">套装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">套衫</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/second-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">圆领</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/second-card-2.jpg")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">V-领</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gradient-1">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3>女套衫</h3>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-1-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Bravo neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$300</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-2-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Good neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$250</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+7 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-3-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Boat neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$350</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-4-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Nice neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$360</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Эрэгтэй хэсэг */}
          <div className="row mt-6">
            <div className="col-12">
              <h3>女套衫</h3>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-2-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Bravo neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$300</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-1-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Good neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$250</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+7 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-3-@2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Boat neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$350</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-4-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Nice neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$360</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Нэг хүүхэнтэй хэсэг */}
      <section className="py-6 py-md-10">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-5">
              <h4 className="text-center">
                春意弥漫空中！是的，现在您就可以穿着全新羊绒服上街了！具有轻盈柔和质感的#全新春夏系列，将在这个不一样的季节为您带来春夏独特的温暖和崭新体验
              </h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">裙装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">套装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/primary-card.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">套衫</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/second-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">圆领</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("./assets/img/second-card-2.jpg")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">V-领</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gradient-1">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3>女套衫</h3>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-1-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Bravo neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$300</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-2-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Good neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$250</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+7 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-3-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Boat neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$350</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/third-card-4-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Nice neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$360</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Эрэгтэй хэсэг */}
          <div className="row mt-6">
            <div className="col-12">
              <h3>女套衫</h3>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-2-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Bravo neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$300</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-1-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Good neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$250</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+7 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-3-@2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Boat neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$350</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-secondary">
                <img
                  src={require("./assets/img/men-4-2x.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-secondary-title">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h6 className="text-uppercase mb-0">Nice neck dress</h6>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">$360</small>
                    </li>
                    <li>
                      <small className="text-black-50 mb-0">+6 Colors</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-md-10">
        <div className="container-xl">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-3">
              <div className="blue-outline">
                <img
                  src={require("./assets/img/outlinetai.png")}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="card-side">
                <img
                  src={require("./assets/img/zuragtai-huuhen.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-side-title">
                  <h1 className="mb-0">初秋 焕新</h1>
                  {/* <div className="abs-center">
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
