import React, { Component } from "react";
import moment from "moment";
import "moment/locale/tr";
import notifiationSound from "../Assets/notification.mp3";
import * as signalR from "@microsoft/signalr/dist/browser/signalr";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class CallerList extends Component {
  state = {
    connection: null,
    callerList: [],
    audio: null,
  };

  componentDidMount() {
    moment.locale("tr");
    this.setState(
      {
        connection: new signalR.HubConnectionBuilder()
          .withUrl("https://localhost:44346/Caller-Hub")
          .configureLogging(signalR.LogLevel.Information)
          .build(),
      },
      () => {
        try {
          this.state.connection.start().then(() => {
            this.state.connection
              .invoke("RegisterUserByReceiver", "000000123")
              .catch((err) => console.error(err));
          });

          this.state.connection.on("ReceiveCallerInfo", (callerInfo) => {
            this.setState(
              {
                audio: new Audio(notifiationSound),
                callerList: [
                  ...this.state.callerList,
                  { id: moment().format("x"), ...callerInfo },
                ],
              },
              () => {
                if (this.state.audio) this.state.audio.play();
                window.scrollTo(0, document.body.clientHeight);
              }
            );
          });
        } catch (err) {
          console.log(err);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <div className="bg-primary">
          <div className="container text-secondary py-2 text-center">
            Çağrılarınızı canlı olarak alabilmeniz için{" "}
            <a
              className="text-warning"
              href="https://www.google.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taksi Defteri Client
            </a>
            &nbsp;uygulamasını indirerek bilgisayarınıza kurmanız gerekmektedir.
            <br />
            Bu uygulama ile Caller ID cihazınızla etkileşim kurarız.
          </div>
        </div>
        <div className="container pt-5">
          <h3>Çağrılarım</h3>
          <table className="bg-white table table-bordered table-hover shadow-lg">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Arama Zamanı</th>
                <th scope="col">Telefon</th>
                <th scope="col">İsim Soyisim</th>
                <th scope="col">Adres</th>
                <th scope="col">Seri Numarası</th>
              </tr>
            </thead>
            <tbody>
              {this.state.callerList.length > 0 ? (
                this.state.callerList.map((caller) => (
                  <ContextMenuTrigger
                    renderTag="tr"
                    id="same_unique_identifier"
                    key={caller.id}
                    onOpen={()=>{
                      alert("selam");
                    }}
                    holdToDisplay={-1}
                  >
                    <td>{caller.lineNumber}</td>
                    <td>{moment(caller.callDateTime).format("LLL")}</td>
                    <td>{caller.callerNumber}</td>
                    <td></td>
                    <td></td>
                    <td>{caller.deviceSerialNumber}</td>
                  </ContextMenuTrigger>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan={6}>
                    Henüz bir çağrı alınmadı
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <ContextMenu
            className="list-group shadow-lg"
            id="same_unique_identifier"
          >
            <MenuItem
              className="list-group-item list-group-item-action cursor-pointer"
              data={{ foo: "bar" }}
              onClick={() => {
                alert("hop kaydettim");
              }}
            >
              <i className="fas fa-plus-square fa-fw mr-3"></i>
              <span>Adres Defterine Kaydet</span>
            </MenuItem>
          </ContextMenu>
        </div>
      </div>
    );
  }
}

export default CallerList;
