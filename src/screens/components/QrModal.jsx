import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "../../styles/css/main.scss";

function QrModal({ data, open, onClose }) {
  const [qrData, setQrData] = useState({
    address: "",
    nftPrice: "",
  });

  useEffect(() => {
    if (data) {
      setQrData({ ...data });
    }
  }, [open]);

  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popup2" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => onClose()}></button>
        <div className="popupTitle">Pending payment confirmation</div>
        <br />
        <div className="popupText">
          Your order has been approved. <br />
          Send Ada using the information below.
        </div>
        <div className="popupCode" style={{ display: "inline-block" }}>
          <QRCode value={qrData.address} size={150} />
        </div>
        <div className="popupText">
          <div className="popupSubtitle">Address</div>
          <div className="popupBox">
            <input type="text" readOnly value={qrData.address} />
            <button className="btnCopy" onClick={() => navigator.clipboard.writeText(qrData.address)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"></path>
              </svg>
            </button>
          </div>
          <div className="popupSubtitle">Amount</div>
          <div className="popupBox">
            <input type="text" readOnly value={qrData.nftPrice / 1000000} /> ADA
            <button className="btnCopy" onClick={() => navigator.clipboard.writeText(qrData.nftPrice / 1000000)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"></path>
              </svg>
            </button>
          </div>
          <div className="popupSubtitle">Important</div>
          <div className="popupBox red" style={{ textAlign: "left" }}>
            * You must use a Cardano Shelley-Era wallet such as
            <a href="https://daedaluswallet.io/" target="_blank" rel="noreferrer">
              Daedalus
            </a>
            ,
            <a href="https://yoroi-wallet.com/" target="_blank" rel="noreferrer">
              Yoroi
            </a>
            <br />
            * It might take a minute your addressTransaction to be reflected after payment.
            <br />
            * It is based on the order in which Ada is transferred to the server wallet, <br />
            &nbsp;&nbsp;&nbsp;&nbsp; not the order in which the purchase button was pressed.
            <br />
            * If the purchase fails or the amount does not match, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;The amount transferred will be automatically refunded excluding fees.
            <br />
          </div>
        </div>
      </div>
      <div className="popupBg"></div>
    </div>
  );
}

export default QrModal;
