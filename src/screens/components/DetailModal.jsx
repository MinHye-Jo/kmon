import React, { useState, useEffect } from "react";
import "../../styles/css/main.scss";

function DetailModal({ data, open, onClose, onAction }) {
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
      <div className="popup1" style={{ display: open ? "block" : "none" }}>
        <button className="popupClose" onClick={() => onClose()}></button>
        <div className="popupLeft">
          <div
            className={collectionData.closed ? "closed" : "soldOut"}
            style={{ display: soldOut || collectionData.closed ? "block" : "none" }}
          >
            <div>
              Sold
              <br />
              Out
            </div>
          </div>
          <div></div>
          <div className="popupImg">
            <img
              src={collectionData.imgUrl.replace("/static/", "/")}
              alt={collectionData.nftNameKor}
              name={collectionData.nftNameKor}
            />
          </div>
        </div>
        <div className="popupRight">
          <div className="popupTitle">{collectionData.nftNameKor}</div>
          <div className="popupText">
            <div className="row">
              <div className="popupSubtitle">Age</div>
              <span>{collectionData.age}</span>
            </div>
            <div className="row">
              <div className="popupSubtitle">Story</div>
            </div>
            <div className="row">
              <span dangerouslySetInnerHTML={{ __html: collectionData.description }}></span>
            </div>
            <div className="row">
              <br />
            </div>
            <div className="row">
              <div className="popupSubtitle">Price</div>
              <span className="blue">{collectionData.nftPrice / 1000000 + " ADA"}</span>
            </div>
            <div className="row">
              <div className="popupSubtitle">Remain</div>
              <span className="blue">{collectionData.targetQuantity - collectionData.mintCount}</span>
            </div>
            <div className="buyNumber">
              <div className="popupSubtitle">Quantity</div>
              <div className="quantity">
                <input readOnly type="number" min="1" max="9" step="1" value="1" />
                <div className="quantity-nav">
                  <div className="quantity-button quantity-up">+</div>
                  <div className="quantity-button quantity-down">-</div>
                </div>
              </div>
              <button className="btnBuy" disabled onClick={() => onAction(collectionData)}>
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="popupBg"></div>
    </div>
  );
}

export default DetailModal;
