import React from "react";

export default function Cards(props) {
  return (
    <div>
      <section className="py-6 py-md-10">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-xl-5">
              <h4 className="text-center">
                春意弥漫空中！是的，现在您就可以穿着全新羊绒服上街了！具有轻盈柔和质感的#全新春夏系列，将在这个不一样的季节为您带来春夏独特的温暖和崭新体验
              </h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card-primary shadow-dark-lg">
                <div className="card-overlay"></div>
                <img
                  src={require("../../assets/img/primary-card-2.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">裙装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card-primary">
                <div className="card-overlay"></div>
                <img
                  src={require("../../assets/img/primary-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">套装</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-primary shadow-dark-lg">
                <div className="card-overlay"></div>
                <img
                  src={require("../../assets/img/primary-card.png")}
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
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="card-primary shadow-dark-lg">
                <div className="card-overlay"></div>
                <img
                  src={require("../../assets/img/second-card-1.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-primary-title">
                  <h4 className="mb-0">圆领</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-primary shadow-dark-lg">
                <div className="card-overlay"></div>
                <img
                  src={require("../../assets/img/second-card-2.jpg")}
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
    </div>
  );
}
