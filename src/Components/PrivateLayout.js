import React, { Component } from "react";

class PrivateLayout extends Component {
  render() {
    return (
      <div
        className="bg-light"
        style={{
          minHeight: "100vh",
        }}
      >
        <div id="header" className="bg-secondary shadow">
          <div>
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="w-100">
                  <button type="button" className="btn btn-outline-primary mr-2">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <h2 className="m-0 py-4 font-weight-bold text-nowrap">
                  Taksi Defteri
                </h2>
                <div className="w-100 text-right">
                  <button type="button" className="btn btn-outline-primary mr-2">
                    Hesap
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-warning py-2">
            <div className="container d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-tachometer-alt mr-2"></i>
                <span>Anasayfa</span>
              </button>
              <button type="button" className="btn btn-primary ml-2">
                <i className="fas fa-headset mr-2"></i>
                <span>Çağrılarım</span>
              </button>
              <button type="button" className="btn btn-primary ml-2">
                <i className="fas fa-book-open mr-2"></i>
                <span>Adres Defteri</span>
              </button>
            </div>
          </div>
        </div>
        <div id="content">{this.props.children}</div>
      </div>
    );
  }
}

export default PrivateLayout;
