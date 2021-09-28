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
  const [quantity, setQuantity] = useState(1);

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
        <button className="popupClose" onClick={() => {
          setQuantity(1)
          onClose()
        }}></button>
        <div className="buyNumber">
          <div className="popupTitle">Quantity</div>
          <div className="quantity">
            <button className="quantity-button quantity-down"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }}
            />
            <input readOnly type="number" min="1" max="10" step="1" value={quantity} />
            <button className="quantity-button quantity-up" onClick={() => {
              if (quantity < 10) {
                setQuantity(quantity + 1)
              }

            }} />
            <div className="quantity-nav"></div>
          </div>
        </div>
        <div className="popupText">
          <div className="row">
            <div className="popupSubtitle">Quantity</div>
            <span className="blue">{quantity}</span>
          </div>

          <div className="row">
            <div className="popupSubtitle">Price</div>
            <span className="blue">{15 * quantity}ADA</span>
          </div>
          <button className="btnBuy" onClick={() => {
            data.quantity = quantity;
            setQuantity(1); // 일단 초기화.
            onAction(collectionData)
          }}>
            BUY
          </button>
        </div>
      </div>

      <div className="popupBg" onClick={() => {
        setQuantity(1)
        onClose()
      }}></div>
    </div>
  );
}

export default QuantityModal;
