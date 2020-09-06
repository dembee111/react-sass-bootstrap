import React from "react";

export default function Card3() {
  return (
    <div>
      {/* Нэг хүүхэнтэй хэсэг */}
      <section className="py-md-10">
        <div className="container-xl">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="blue-outline">
                <img
                  src={require("../../assets/img/outlinetai.png")}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>

            <div className="col-md-8 d-none d-lg-block">
              <div className="card-side">
                <img
                  src={require("../../assets/img/zuragtai-huuhen.png")}
                  className="img-fluid"
                  alt="..."
                />
                <div className="card-side-title">
                  <h1 className="mb-0">初秋 焕新</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
