import React, { useState, useEffect } from "react";
import "../../styles/css/main.scss";

function QuantityModal({ data, open, onClose, onAction }) {
  const [collectionData, setCollectionData] = useState({
    nftNameKor: "",
    imgUrl: "",
    age: "",
    description: "",
    nftPrice: "",
    targetQuantity: 0,
    mintCount: 0,
    closed: false,
  });
  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    if (data) {
      setCollectionData({ ...data });

      // soldOut 제어
      if (data.targetQuantity - data.mintCount <= 0) {
        setSoldOut(true);
      } else setSoldOut(false);

      /* clearInterval(intervalVal);
        intervalVal = setInterval(checkSoldOut, 10000);
        return false; */
    }
  }, [data]);

  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popup3" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => onClose()}></button>
        <div className="buyNumber">
          <div className="popupTitle">Quantity</div>
          <div className="quantity">
            <div className="quantity-button quantity-down"></div>
            <input readOnly type="number" min="1" max="9" step="1" value="1" />
            <div className="quantity-button quantity-up"></div>
            <div className="quantity-nav"></div>
          </div>
        </div>
        <div className="popupText">
          <div className="row">
            <div className="popupSubtitle">Quantity</div>
            <span className="blue">1</span>
          </div>

          <div className="row">
            <div className="popupSubtitle">Price</div>
            <span className="blue">15ADA</span>
          </div>
          <button className="btnBuy" onClick={() => onAction(collectionData)}>
            BUY
          </button>
        </div>
      </div>

      <div className="popupBg"></div>
    </div>
  );
}

export default QuantityModal;
