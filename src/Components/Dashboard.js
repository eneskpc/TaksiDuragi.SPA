import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container pt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-nowrap">Trafik Durumu</h3>
            <select
              className="form-control"
              style={{
                maxWidth: "200px",
              }}
            >
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>Bursa</option>
              <option>İzmir</option>
              <option>Giresun</option>
            </select>
          </div>
          <iframe
            src="https://yandex.com.tr/map-widget/v1/-/CCQ3mReCHA"
            width="100%"
            height="400"
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Dashboard;
